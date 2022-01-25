import React, { useState } from 'react';
import queryString from 'query-string'
import { useHistory, useLocation } from "react-router-dom";
import { Col, Container, Form, Row}  from "react-bootstrap";
import { Pages } from "./NavBar";
import { postData, PutDataProps } from "../client/aws-client";

function Rsvp() {
    const history = useHistory();
    const { search } = useLocation();

    const initialErrors: string[] = [];
    const hasGuest = queryString.parse(search).key;

    const [errors, setErrors] = useState(initialErrors);
    const [name, setName] = useState("");
    const [guestName, setGuestName] = useState("");
    const [plusOne] = useState(hasGuest ? true : false);
    const [email, setEmail] = useState("");
    const [song, setSong] = useState("");
    const [attending, setAttending] = useState(undefined);
    const [showErrorModal, setErrorModal] = useState(false);


    const handleSubmit = async (event: any, history: any) => {
        if (event) {
            const newErrors = [];
            if (name === "") {
                newErrors.push("name")
            }
            if (attending === undefined) {
                newErrors.push("attending")
            }
            if (attending) {
                if (email === "") {
                    newErrors.push("email")
                }
                if (song === "") {
                    newErrors.push("song")
                }
                if (hasGuest) {
                    if (guestName === "") {
                        newErrors.push("guestName")
                    }
                }
            }

            if (newErrors.length === 0) {
                // No errors, add RSVP
                let postDataBody: PutDataProps;

                if (attending) {
                    postDataBody = {
                        name,
                        attending: true,
                        email: email || name,
                        plusOne,
                        guestName,
                        song,
                        shouldHaveGuest: hasGuest ? true : false
                    }
                } else {
                    postDataBody = {
                        name,
                        attending: false,
                        email: email || name,
                        shouldHaveGuest: hasGuest ? true : false
                    }
                } 

                // Add to DDB
                try {
                    const response = await postData(postDataBody);

                    if (response && response.success) {
                        history.push(Pages.Confirm);
                    } else {
                        console.log("Failed, but no exception");
                        setErrorModal(true);
                    }
                } catch (error) {
                    console.log("Oops! That's embarrassing");
                    setErrorModal(true);
                }
            } else {
                setErrors(newErrors);
            }
        }
    }


    return (
        <>
        <div className="app-header">
            <div className="heading">
                <h2 className="title">
                    Jennifer & Gregor
                </h2>
                <p className="sub-heading">
                    Saturday 8th October, 2022 <span>&#183;</span> Cambo Estate, Scotland
                </p>
            </div>
        </div>
        <div className="rsvp-page">

            <Container className="content">
                <Row>
                    <Col xs={12} md={12} className="form-container">
                        <h1 className="title">
                            Yes, I'll be there
                        </h1>
                        <p className="description">
                            Join Greg and Jenny at Cambo Estate for a big auld Scottish wedding!<br/><br/>
                            
                            Please let us know your plans by September 1, 2022. We can't wait to celebrate with you all!
                        </p>
                        <Col xs={12} md={12} className="wedding-detail-container">
                            <div className="wedding-details-box">
                                <h4>Details</h4>
                                <b>Date: </b>
                                October 8, 2022, 2PM <br/>
                                <b>Address: </b>
                                Cambo Estate, Kingsbarns, St Andrews, Fife, KY16 8QD
                                Saturday, October 8, 2022 <br/>
                                <hr/>
                                <h4>Ceremony & Reception</h4>
                                <b>Ceremony:</b> 1pm <br/>
                                <b>Evening Guests:</b> 7pm <br/>
                                <hr/>
                            </div>
                        </Col>
                        <Form>
                            <NameInput
                                name={name}
                                guestName={guestName}
                                setName={setName}
                                setGuestName={setGuestName}
                                errors={errors}
                                hasGuest={hasGuest}/>
                            <AttendingCheckboxes setAttending={setAttending} errors={errors}/>
                            {attending ?
                                (<>
                                        <div className="form-group email-form">
                                            <label htmlFor="exampleInputEmail1">Email</label>
                                            <Form.Control type="email"
                                                          className="form-control"
                                                          id="exampleInputEmail1"
                                                          isInvalid={errors.includes("email")}
                                                          value={email}
                                                          onChange={(event) => setEmail(event.target.value)}
                                                          required/>
                                            <p>We will use your email to contact you about meal preferences closer to
                                                the time.</p>
                                            <div className={errors.includes("email") ? "" : "hidden"}>
                                                Email is required.
                                            </div>
                                        </div>
                                        <div className="form-group song-form">
                                            <p>Please add a song of your choice which we can play on our big day!</p>
                                            <label htmlFor="inputSong">Song request</label>
                                            <Form.Control type="song"
                                                          className="form-control"
                                                          id="inputSong"
                                                          isInvalid={errors.includes("song")}
                                                          value={song}
                                                          onChange={(event) => setSong(event.target.value)}
                                                          required/>
                                            <div className={errors.includes("song") ? "" : "hidden"}>
                                                Song request is required.
                                            </div>
                                        </div>
                                    </>
                                ) : null}
                            <div className="button" onClick={(event) => handleSubmit(event, history)}>
                                Submit
                            </div>
                            { showErrorModal ?
                                <div className="errorMessage">
                                    <h5>Oops! That's embarrassing</h5>
                                    <p>Sorry, it doesn't seem to be working. Try retrying and if that doesn't work, contact Greg or Jenny.</p>
                                </div>
                            : null}
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
    );
}

interface NameInputProps {
    name: string;
    setName: any;
    setGuestName: any;
    guestName: string;
    errors: string[];
    hasGuest: string | string[] | null;
}

const NameInput = ({name, setName, setGuestName, guestName, errors, hasGuest}: NameInputProps) =>
    <div className="form-group name-form">
        <Row>
            <Col xs={12} md={hasGuest ? 6 : 12}>
                <label htmlFor="inputName">{hasGuest ? "Guest 1: Full name" : "Full name"}</label>
                <Form.Control className="form-control"
                              id="inputName"
                              value={name}
                              isInvalid={errors.includes("name")}
                              onChange={(event) => setName(event.target.value)}
                              required/>
                <div className={errors.includes("name") ? "" : "hidden"}>
                    A name is required.
                </div>
            </Col>
            { hasGuest ?
                (<Col xs={12} md={6}>
                    <label htmlFor="inputGuestName">Guest 2: Full name</label>
                    <Form.Control className="form-control"
                                id="inputGuestName"
                                value={guestName}
                                isInvalid={errors.includes("guestName")}
                                onChange={(event) => setGuestName(event.target.value)}
                                required/>
                    <div className={errors.includes("guestName") ? "" : "hidden"}>
                        A name is required.
                    </div>
                </Col>
                ) : null }
        </Row>
    </div>

const AttendingCheckboxes = ({setAttending, errors}: { setAttending: any; errors: string[] }) =>
    <>
        <Row>
            <Col md={6}>
                <div className="form-check">
                    <Form.Check
                        inline
                        label="We Will See You There!"
                        isInvalid={errors.includes("attending")}
                        name="group1"
                        type="radio"
                        id="inline-radio-1"
                        onChange={(_) => setAttending(true)}
                    />
                </div>
            </Col>
            <Col md={6}>
                <div className="form-check">
                    <Form.Check
                        inline
                        label="Sorry To Miss Out"
                        name="group1"
                        isInvalid={errors.includes("attending")}
                        type="radio"
                        id="inline-radio-2"
                        onChange={(_) => setAttending(false)}
                    />
                </div>
            </Col>
            <Col md={12} className="centered">
                <div className={errors.includes("attending") ? "attending" : "attending hidden"}>
                    Please select one of the options above
                </div>
            </Col>
        </Row>
    </>


export default Rsvp;
