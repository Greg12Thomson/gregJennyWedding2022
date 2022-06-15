import React from 'react';
import { Form } from "react-bootstrap";

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
    hasGuest: string | string[];
    name: string;
    guestName?: string;
    setGuestStarter: Function;
    setGuestMain: Function;
}

// TODO: add error handling
// TODO: add guest food choice
function RsvpFoodOptions({ setStarter, setMain, errors, hasGuest, name, guestName, setGuestMain, setGuestStarter }: RsvpFoodChoiceProps) {

    return (
        <div className="food-choice-container">
            <p>Please select what <strong>{name || 'you'}</strong> would like for the meal.</p>
            <p className="food-choice-label">Starter</p>
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
            <p className="food-choice-label">Main</p>
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
            {hasGuest &&
                <>
                    <p>Please select what <strong>{guestName || 'the second guest'}</strong> would like for the meal.</p>
                    <p className="food-choice-label">Starter</p>
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
                    <p className="food-choice-label">Main</p>
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
        </div>
    );
}

export default RsvpFoodOptions;
