import React from "react";

const Alert = props => {
    const clickHandler = () => {
        props.getForm(true);
    }

    return (
        <div>
            <div>
                <h1>Invalid Input</h1>
            </div>
            <p>{props.message}</p><br />
            <button type="button" onClick={clickHandler}>Cancel</button>
        </div>
    )
};

export default Alert;