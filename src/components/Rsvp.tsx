import React, {useState} from 'react';
import {Col, Container, Form, Row} from "react-bootstrap";

function Rsvp() {
    const initialErrors: string[] = []
    const [plusOne, setPlusOne] = useState(false);
    const [errors, setErrors] = useState(initialErrors);
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [firstNamePlusOne, setFirstNamePlusOne] = useState("");
    const [lastNamePlusOne, setLastNamePlusOne] = useState("");

    const handleSubmit = (event: any) => {
        if (event) {
            const newErrors = [];
            if (firstName === "") {
                newErrors.push("firstName")
            }
            if (lastName === "") {
                newErrors.push("lastName")
            }
            if (email === "") {
                newErrors.push("email")
            }
            if (plusOne) {
                if(lastNamePlusOne === "") {
                    newErrors.push("lastNamePlusOne")
                }
                if (firstNamePlusOne === "") {
                    newErrors.push("firstNamePlusOne")
                }
            }
            setErrors(newErrors);
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
                            <div className="form-group name-form">
                                <Row>
                                    <Col md={6}>
                                        <label htmlFor="inputFirstName">*First Name</label>
                                        <input className="form-control"
                                               id="inputFirstName"
                                               value={firstName}
                                               onChange={(event) => setFirstname(event.target.value)}
                                               required />
                                        <div className={errors.includes("firstName") ? "" : "hidden"}>
                                            First name is required.
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <label htmlFor="inputLastName">*Last Name</label>
                                        <input className="form-control"
                                               id="inputLastName"
                                               value={lastName}
                                               onChange={(event) => setLastName(event.target.value)}
                                               required>
                                        </input>
                                        <div className={errors.includes("lastName") ? "" : "hidden"}>
                                            Last name is required.
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="form-group email-form">
                                <label htmlFor="exampleInputEmail1">*Email</label>
                                <input type="email"
                                       className="form-control"
                                       id="exampleInputEmail1"
                                       value={email}
                                       onChange={(event) => setEmail(event.target.value)}
                                       required>
                                </input>
                                <div className={errors.includes("email") ? "" : "hidden"}>
                                    Email is required.
                                </div>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="exampleRadios"
                                       id="exampleRadios1"
                                       onChange={(event) => setPlusOne(event.target.checked)}
                                       required/>
                                <div className="invalid-feedback">
                                    Please provide a valid city.
                                </div>
                                <label className="form-check-label" htmlFor="exampleRadios1">
                                    I'm bringing a plus one
                                </label>
                            </div>
                            {plusOne ?
                                (<div className="form-group name-form">
                                    <Row>
                                        <Col md={6}>
                                            <label htmlFor="inputFirstNamePlusOne">*First Name</label>
                                            <input
                                                className="form-control"
                                                id="inputFirstNamePlusOne"
                                                value={firstNamePlusOne}
                                                onChange={(event) => setFirstNamePlusOne(event.target.value)}
                                                required>
                                            </input>
                                            <div className={errors.includes("firstNamePlusOne") ? "" : "hidden"}>
                                                First name is required.
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="inputLastNamePlusOne">*Last Name</label>
                                            <input
                                                className="form-control"
                                                id="inputLastNamePlusOne"
                                                value={lastNamePlusOne}
                                                onChange={(event) => setLastNamePlusOne(event.target.value)}
                                                required>
                                            </input>
                                            <div className={errors.includes("lastNamePlusOne") ? "" : "hidden"}>
                                                Last name is required.
                                            </div>
                                        </Col>
                                    </Row>
                                </div>)
                                : null}
                            <div className="button" onClick={(event) => handleSubmit(event)}>
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

export default Rsvp;
