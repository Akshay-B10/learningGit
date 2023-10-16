import React, { useState } from "react";

import Card from "../UI/Card";
import "./UserForm.css"

const UserForm = props => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    const nameChangeHandler = event => {
        setName(event.target.value);
    }

    const ageChangeHandler = event => {
        setAge(event.target.value);
    }

    const addUserHandler = event => {
        event.preventDefault();
        props.addUser({
            id: Date.now().toString(),
            name: name,
            age: age
        });
    }

    return (
        <Card className="add_user__form">
            <form onSubmit={addUserHandler}>
                <label>Username</label>
                <input type="text" onChange={nameChangeHandler} />
                <label>Age (in Years)</label>
                <input type="number" onChange={ageChangeHandler} />
                <div>
                    <button type="submit" className="btn">Add User</button>
                </div>
            </form>
        </Card>
    );
};

export default UserForm;