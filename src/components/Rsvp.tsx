import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import {Col, Container, Form, Row} from "react-bootstrap";
import {Pages} from "./NavBar";

function Rsvp() {
    const history = useHistory();
    const initialErrors: string[] = []
    const [plusOne, setPlusOne] = useState(false);
    const [errors, setErrors] = useState(initialErrors);
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [song, setSong] = useState("");
    const [attending, setAttending] = useState(undefined);
    const [firstNamePlusOne, setFirstNamePlusOne] = useState("");
    const [lastNamePlusOne, setLastNamePlusOne] = useState("");

    const handleSubmit = (event: any, history: any) => {
        if (event) {
            const newErrors = [];
            if (firstName === "") {
                newErrors.push("firstName")
            }
            if (lastName === "") {
                newErrors.push("lastName")
            }
            if (attending === undefined) {
                newErrors.push("attending")
            }
            if (attending) {
                if (email === "") {
                    newErrors.push("email")
                }
                // TODO: add red round input
                if (song === "") {
                    newErrors.push("song")
                }
                if (plusOne) {
                    if (lastNamePlusOne === "") {
                        newErrors.push("lastNamePlusOne")
                    }
                    if (firstNamePlusOne === "") {
                        newErrors.push("firstNamePlusOne")
                    }
                }
            }

            if (newErrors.length === 0) {
                history.push(Pages.Confirm);
            } else {
                setErrors(newErrors);
            }
        }
    }


    return (
        <div className="rsvp-page">
            <Container>
                <Row>
                    <Col xs={12} md={8} className="form-container">
                        <h1 className="page-header">
                            Yes, I'll Be There
                        </h1>
                        <Form>
                            <NameInput
                                lastName={lastName}
                                firstName={firstName}
                                setLastName={setLastName}
                                setFirstname={setFirstname}
                                errors={errors}/>
                            <AttendingCheckboxes setAttending={setAttending} errors={errors}/>
                            {attending ?
                                (<>
                                        <div className="form-group email-form">
                                            <label htmlFor="exampleInputEmail1">*Email</label>
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

                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="exampleRadios"
                                                   id="exampleRadios1"
                                                   onChange={(event) => setPlusOne(event.target.checked)}
                                                   required/>
                                            <label className="form-check-label" htmlFor="exampleRadios1">
                                                I'm bringing a plus one
                                            </label>
                                        </div>
                                        {plusOne ?
                                            (<NameInput
                                                    lastName={lastNamePlusOne}
                                                    firstName={firstNamePlusOne}
                                                    setLastName={setLastNamePlusOne}
                                                    setFirstname={setFirstNamePlusOne}
                                                    errors={errors}/>
                                            ) : null}
                                        <div className="form-group song-form">
                                            <p>Please add a song of your choice which we can play on our big day!</p>
                                            <label htmlFor="inputSong">*Song request</label>
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
                        </Form>
                    </Col>
                    <Col xs={12} md={4} className="wedding-detail-container">
                        <div className="wedding-details-box">
                            <h4>JENNIFER & GREGOR</h4>
                            <hr/>
                            October 8, 2022, 2PM |<br/>
                            Cambo Estate, Kingsbarns, St Andrews, Fife, KY16 8QD
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

interface NameInputProps {
    firstName: string;
    setFirstname: any;
    setLastName: any;
    lastName: string;
    errors: string[];
}

const NameInput = ({firstName, setFirstname, setLastName, lastName, errors}: NameInputProps) =>
    <div className="form-group name-form">
        <Row>
            <Col md={6}>
                <label htmlFor="inputFirstName">*First Name</label>
                <Form.Control className="form-control"
                              id="inputFirstName"
                              value={firstName}
                              isInvalid={errors.includes("firstName")}
                              onChange={(event) => setFirstname(event.target.value)}
                              required/>
                <div className={errors.includes("firstName") ? "" : "hidden"}>
                    First name is required.
                </div>
            </Col>
            <Col md={6}>
                <label htmlFor="inputLastName">*Last Name</label>
                <Form.Control className="form-control"
                              id="inputLastName"
                              value={lastName}
                              isInvalid={errors.includes("lastName")}
                              onChange={(event) => setLastName(event.target.value)}
                              required/>
                <div className={errors.includes("lastName") ? "" : "hidden"}>
                    Last name is required.
                </div>
            </Col>
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
