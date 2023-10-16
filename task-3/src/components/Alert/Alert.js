import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import Card from "../UI/Card";
import "./Alert.css";

const Backdrop = () => {
    return <div className="backdrop" />
}

const ModalOverlay = props => {
    return (
        <Card className="modal">
            <header className="header">
                <h2>Invalid Input</h2>
            </header>
            <div className="content">
                <p>{props.message}</p>
            </div>
            <footer className="actions">
                <button type="button" className="modal_btn" onClick={props.onClick}>Cancel</button>
            </footer>
        </Card>
    );
}

const Alert = props => {
    const clickHandler = () => {
        props.getForm(true);
    }

    return (
        <Fragment>
            {ReactDOM.createPortal(
                <Backdrop />,
                document.getElementById("modal_backdrop")
            )}
            {ReactDOM.createPortal(
                <ModalOverlay message={props.message} onClick={clickHandler} />,
                document.getElementById("modal_overlay")
            )}
        </Fragment>
    )
};

export default Alert;