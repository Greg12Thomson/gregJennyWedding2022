import React, { useState } from 'react';
import Confirmation from "./Confirmation";
import confetti from 'canvas-confetti';
import queryString from 'query-string'
import { useLocation } from "react-router-dom";
import { Col, Container, Form, Row } from "react-bootstrap";
import { postData, PutDataProps } from "../client/aws-client";
import RsvpFoodOptions from './RsvpFoodOptions';

function Rsvp() {
    const { search } = useLocation();

    const initialErrors: string[] = [];
    const qs = queryString.parse(search)
    const hasGuest = qs.key || qs.KEY || qs.Key;

    const [errors, setErrors] = useState(initialErrors);
    const [name, setName] = useState("");
    const [attending, setAttending] = useState(undefined);
    const [email, setEmail] = useState("");
    const [starter, setStarter] = useState(undefined);
    const [main, setMain] = useState(undefined);
    const [song, setSong] = useState("");
    const [dietryRequirments, setDietryRequirments] = useState("");
    const [showErrorModal, setErrorModal] = useState(false);
    const [complete, setComplete] = useState(false);

    // Guest state
    const [plusOne] = useState(hasGuest ? true : false);
    const [guestName, setGuestName] = useState("");
    const [guestStarter, setGuestStarter] = useState(undefined);
    const [guestMain, setGuestMain] = useState(undefined);


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
                if (hasGuest) {
                    if (guestName === "") {
                        newErrors.push("guestName")
                    }
                    if (guestMain === undefined) {
                        newErrors.push("guestMain")
                    }
                    if (guestStarter === undefined) {
                        newErrors.push("guestStarter")
                    }
                }
                if (main === undefined) {
                    newErrors.push("main")
                }
                if (starter === undefined) {
                    newErrors.push("starter")
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
                        main,
                        starter,
                        dietryRequirments,
                        plusOne,
                        guestName,
                        guestStarter,
                        guestMain,
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
                                request the pleasure of your company at the celebrations of their wedding<br /><br />
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
                                </div>
                            </Col>
                            <Form>
                                <NameInput
                                    name={name}
                                    guestName={guestName}
                                    setName={setName}
                                    setGuestName={setGuestName}
                                    errors={errors}
                                    hasGuest={hasGuest} />
                                <AttendingCheckboxes setAttending={setAttending} errors={errors} hasGuest={hasGuest} />
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
                                        <RsvpFoodOptions
                                            setStarter={setStarter}
                                            setMain={setMain}
                                            errors={errors}
                                            name={name}
                                            hasGuest={hasGuest}
                                            guestName={guestName}
                                            dietryRequirments={dietryRequirments}
                                            setGuestStarter={setGuestStarter}
                                            setGuestMain={setGuestMain}
                                            setDietryRequirments={setDietryRequirments}/>
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
    setGuestName: any;
    guestName: string;
    errors: string[];
    hasGuest: string | string[] | null;
}

const NameInput = ({ name, setName, setGuestName, guestName, errors, hasGuest }: NameInputProps) =>
    <div className="form-group name-form">
        <Row>
            <Col xs={12} md={hasGuest ? 6 : 12}>
                <label htmlFor="inputName">{hasGuest ? "Guest 1: Full name" : "Full name"}</label>
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
            {hasGuest &&
                (<Col xs={12} md={6}>
                    <label htmlFor="inputGuestName">Guest 2: Full name</label>
                    <Form.Control className="form-control"
                        id="inputGuestName"
                        value={guestName}
                        isInvalid={errors.includes("guestName")}
                        onChange={(event) => setGuestName(event.target.value)}
                        required />
                    <div className={errors.includes("guestName") ? "" : "hidden"}>
                        A name is required.
                    </div>
                </Col>)
            }
        </Row>
        <p>Due to numbers, we are unable to invite everyone’s children, we really hope you might take this opportunity to take a well-deserved day off, child-free to celebrate with us.</p>
    </div>

const AttendingCheckboxes = ({ setAttending, errors, hasGuest }: { setAttending: any; errors: string[], hasGuest: string | string[] | null }) =>
    <>
        <Row>
            <Col md={6}>
                <div className="form-check">
                    <Form.Check
                        inline
                        label={hasGuest ? "We Will See You There!" : "I Will See You There!"}
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
