import React, { useState } from 'react';
import Confirmation from "./Confirmation";
import confetti from 'canvas-confetti';
import { Col, Container, Form, Row } from "react-bootstrap";
import { postData, PutDataProps } from "../client/aws-client";

function RsvpEvening() {
    const initialErrors: string[] = [];

    const [errors, setErrors] = useState(initialErrors);
    const [name, setName] = useState("");
    const [attending, setAttending] = useState(undefined);
    const [email, setEmail] = useState("");
    const [song, setSong] = useState("");
    const [showErrorModal, setErrorModal] = useState(false);
    const [complete, setComplete] = useState(false);


    const handleSubmit = async (event: any) => {
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
            }

            // TODO: send to DDB
            if (newErrors.length === 0) {
                // No errors, add RSVP
                let postDataBody: PutDataProps;

                if (attending) {
                    postDataBody = {
                        name,
                        attending: true,
                        email: email || name,
                        song,
                        isEveningGuest: true
                    }
                } else {
                    postDataBody = {
                        name,
                        attending: false,
                        email: email || name,
                    }
                }

                // Add to DDB
                try {
                    confetti({
                        zIndex: 999,
                        particleCount: 200,
                        spread: 70,
                        origin: { y: 0.8 }
                    });

                    const response = await postData(postDataBody);

                    if (response?.success) {
                        setComplete(true);
                        window.scrollTo(0, 0);
                    } else {
                        console.error("Failed, but no exception");
                        setErrorModal(true);
                    }
                } catch (error) {
                    console.error("Oops! That's embarrassing");
                    setErrorModal(true);
                }
            } else {
                setErrors(newErrors);
            }
        }
    }

    if (complete) {
        return Confirmation({attending});
    }


    return (
        <>
            <div className="app-header">
                <div className="heading" id="fade-in">
                    <h2 className="title">
                        Jennifer & Gregor
                    </h2>
                    <p className="sub-heading" id="fade-in-slow">
                        Saturday 8th October, 2022 <span>&#183;</span> Cambo Estate, Scotland
                    </p>
                </div>
            </div>
            <div className="rsvp-page">

                <Container className="content">
                    <Row>
                        <Col xs={12} md={12} className="form-container">
                            <p className="top-description">
                                Together with their families
                            </p>
                            <h3 className="top-description">Jennifer Anne Cleeton</h3>
                            and<br />
                            <h3 className="name">Gregor Robert Thomson</h3>
                            <p className="description">
                                request the pleasure of your company at their evening reception to celebrate their wedding<br /><br />
                                Please let us know your plans by September 1, 2022. We can't wait to celebrate with you all!
                            </p>
                            <Col xs={12} md={12} className="wedding-detail-container">
                                <div className="wedding-details-box">
                                    <h4>Details</h4>
                                    <hr/>
                                    <b>Date: </b>
                                    Saturday, October 8, 2022 <br />
                                    <b>Address: </b>
                                    Cambo Estate, Kingsbarns, St Andrews, Fife, KY16 8QD<br />
                                    <b>Arrival: </b>
                                    7pm<br />
                                </div>
                            </Col>
                            <Form>
                                <NameInput
                                    name={name}
                                    setName={setName}
                                    errors={errors}
                                />
                                <AttendingCheckboxes setAttending={setAttending} errors={errors} />
                                {attending &&
                                    (<>
                                        <div className="form-group email-form">
                                            <label htmlFor="exampleInputEmail1">Email</label>
                                            <p className="food-choice-label-secondary">We will use your email to contact you if required - don't worry, it will be securly stored.</p>
                                            <Form.Control type="email"
                                                className="form-control"
                                                id="exampleInputEmail1"
                                                isInvalid={errors.includes("email")}
                                                value={email}
                                                onChange={(event) => setEmail(event.target.value)}
                                                required />
                                            <div className={errors.includes("email") ? "" : "hidden"}>
                                                Email is required.
                                            </div>
                                        </div>
                                        <div className="form-group song-form">
                                            <label htmlFor="inputSong">Song request</label>
                                            <p className="food-choice-label-secondary">Please add a song of your choice which we can play on our big day!</p>
                                            <Form.Control type="song"
                                                className="form-control"
                                                id="inputSong"
                                                isInvalid={errors.includes("song")}
                                                value={song}
                                                onChange={(event) => setSong(event.target.value)}
                                                required />
                                            <div className={errors.includes("song") ? "" : "hidden"}>
                                                Song request is required.
                                            </div>
                                        </div>
                                    </>
                                    )}
                                <div className="button" onClick={(event) => handleSubmit(event)}>
                                    Submit
                                </div>
                                {showErrorModal && (
                                    <div className="errorMessage">
                                        <h5>Oops! That's embarrassing</h5>
                                        <p>Sorry, it doesn't seem to be working. Try retrying and if that doesn't work, contact Greg or Jenny.</p>
                                    </div>
                                )}
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
    errors: string[];
}

const NameInput = ({ name, setName, errors }: NameInputProps) =>
    <div className="form-group name-form">
        <Row>
            <Col xs={12}>
                <label htmlFor="inputName">Full name</label>
                <Form.Control className="form-control"
                    id="inputName"
                    value={name}
                    isInvalid={errors.includes("name")}
                    onChange={(event) => setName(event.target.value)}
                    required />
                <div className={errors.includes("name") ? "" : "hidden"}>
                    A name is required.
                </div>
            </Col>
        </Row>
    </div>

const AttendingCheckboxes = ({ setAttending, errors }: { setAttending: any; errors: string[]}) =>
    <>
        <Row>
            <Col md={6}>
                <div className="form-check">
                    <Form.Check
                        inline
                        label="I Will See You There!"
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


export default RsvpEvening;
