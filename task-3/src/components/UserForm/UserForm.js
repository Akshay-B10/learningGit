import React, { useRef, useState } from "react";

import Card from "../UI/Card";
import "./UserForm.css"

const UserForm = props => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    const collegeRef = useRef();

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
            age: age,
            college: collegeRef.current.value
        });
        setName("");
        setAge("");
        collegeRef.current.value = "";
    }

    return (
        <Card className="add_user__form">
            <form onSubmit={addUserHandler}>
                <label>Username</label>
                <input type="text" value={name} onChange={nameChangeHandler} />
                <label>Age (in Years)</label>
                <input type="number" value={age} onChange={ageChangeHandler} />
                <label>College</label>
                <input type="text" ref={collegeRef} />
                <div>
                    <button type="submit" className="btn">Add User</button>
                </div>
            </form>
        </Card>
    );
};

export default UserForm;