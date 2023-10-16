import React from "react";

import Card from "../UI/Card";
import "./Alert.css";

const Alert = props => {
    const clickHandler = () => {
        props.getForm(true);
    }

    return (
        <div>
            <div className="backdrop" />
            <Card className="modal">
                <header className="header">
                    <h2>Invalid Input</h2>
                </header>
                <div className="content">
                    <p>{props.message}</p>
                </div>
                <footer className="actions">
                    <button type="button" className="modal_btn" onClick={clickHandler}>Cancel</button>
                </footer>
            </Card>
        </div>
    )
};

export default Alert;