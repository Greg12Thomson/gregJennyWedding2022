import React from 'react';
import { Col, Form, Row } from "react-bootstrap";

enum StartChoice {
    Tofu = "Tofu and Cauliflower in Ginger Plum Sauce (Ve, Gf)",
    Pate = "Vegan Mushroom Pate on Melba Toast (Ve, Gf)"
}

enum MainChoice {
    BlackBeanCakes = "Black Bean Cakes with Grilled Vegetable & Fire Roasted Tomatoes (Ve, Gf)",
    Wellington = "Mushroom and Chestnut Wellington (Ve)"
}

interface RsvpFoodChoiceProps {
    setStarter: Function;
    setMain: Function;
    errors: string[];
    hasGuest: string | string[] | null;
    name: string;
    dietryRequirments: string;
    guestName?: string;
    setGuestStarter: Function;
    setGuestMain: Function;
    setDietryRequirments: Function;
}

function RsvpFoodOptions({
    setStarter,
    setMain,
    errors,
    hasGuest,
    name,
    guestName,
    setGuestMain,
    setGuestStarter,
    dietryRequirments,
    setDietryRequirments }: RsvpFoodChoiceProps) {

    return (
        <div className="food-choice-container">
            <p>Please select what {hasGuest ? <strong>{name || "you"}</strong> : "you"} would like for the meal.</p>
            <label className="food-choice-label">Starter</label>
            <div className="food-choice">
                <Form.Check
                    inline
                    label={StartChoice.Tofu}
                    isInvalid={errors.includes("starter")}
                    name="groupStarter"
                    type="radio"
                    id="starter-radio-1"
                    onChange={(_) => setStarter(StartChoice.Tofu)}
                />
                <Form.Check
                    inline
                    label={StartChoice.Pate}
                    isInvalid={errors.includes("starter")}
                    name="groupStarter"
                    type="radio"
                    id="starter-radio-2"
                    onChange={(_) => setStarter(StartChoice.Pate)}
                />
            </div>
            <label className="food-choice-label">Main</label>
            <div className="food-choice">
                <Form.Check
                    inline
                    label={MainChoice.BlackBeanCakes}
                    isInvalid={errors.includes("main")}
                    name="groupMain"
                    type="radio"
                    id="main-radio-1"
                    onChange={(_) => setMain(MainChoice.BlackBeanCakes)}
                />
                <Form.Check
                    inline
                    label={MainChoice.Wellington}
                    isInvalid={errors.includes("main")}
                    name="groupMain"
                    type="radio"
                    id="main-radio-2"
                    onChange={(_) => setMain(MainChoice.Wellington)}
                />
            </div>
            <label className="food-choice-label">Dessert</label>
            <div className="food-choice-label-secondary">
                <p>A family favourite</p>
            </div>
            {hasGuest &&
                <>
                    <p className="guest-food-choice">Please select what <strong>{guestName || 'the second guest'}</strong> would like for the meal.</p>
                    <label className="food-choice-label">Starter</label>
                    <div className="food-choice">
                        <Form.Check
                            inline
                            label={StartChoice.Tofu}
                            isInvalid={errors.includes("guestStarter")}
                            name="groupGuestStarter"
                            type="radio"
                            id="guest-starter-radio-1"
                            onChange={(_) => setGuestStarter(StartChoice.Tofu)}
                        />
                        <Form.Check
                            inline
                            label={StartChoice.Pate}
                            isInvalid={errors.includes("guestStarter")}
                            name="groupGuestStarter"
                            type="radio"
                            id="guest-starter-radio-2"
                            onChange={(_) => setGuestStarter(StartChoice.Pate)}
                        />
                    </div>
                    <label className="food-choice-label">Main</label>
                    <div className="food-choice">
                        <Form.Check
                            inline
                            label={MainChoice.BlackBeanCakes}
                            isInvalid={errors.includes("guestMain")}
                            name="groupGuestMain"
                            type="radio"
                            id="guest-main-radio-1"
                            onChange={(_) => setGuestMain(MainChoice.BlackBeanCakes)}
                        />
                        <Form.Check
                            inline
                            label={MainChoice.Wellington}
                            isInvalid={errors.includes("guestMain")}
                            name="groupGuestMain"
                            type="radio"
                            id="guest-main-radio-2"
                            onChange={(_) => setGuestMain(MainChoice.Wellington)}
                        />
                    </div>
                </>
            }
            <Row className="dietry-reqs">
                <Col xs={12}>
                    <label className="food-choice-label" htmlFor="dietryReqs">Dietry requrements</label>
                    {hasGuest
                        ? <p className="food-choice-label-secondary">Please add any dietry requirments any guest may have.</p>
                        : <p className="food-choice-label-secondary">Please add any dietry requirments you have.</p>
                    }
                    <Form.Control className="form-control"
                        id="dietryReqs"
                        value={dietryRequirments}
                        onChange={(event) => setDietryRequirments(event.target.value)}
                    />
                </Col>
            </Row>
        </div>
    );
}

export default RsvpFoodOptions;
