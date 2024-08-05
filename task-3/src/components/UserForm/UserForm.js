import React, { useReducer, useRef, useState } from "react";

import Card from "../UI/Card";
import "./UserForm.css"

const userDataReducer = (state, action) => {
    if (action.type === "INPUT_NAME") return { name: action.val, age: state.age }

    if (action.type === "INPUT_AGE") return { name: state.name, age: action.val }

    if (action.type === "INPUT_RESET") return { name: '', age: '' }

    return { name: state.name, age: state.age }
}

const UserForm = props => {
    // const [name, setName] = useState("");
    // const [age, setAge] = useState("");

    const [userData, dispatchUserData] = useReducer(userDataReducer, { name: '', age: '' });

    const collegeRef = useRef();

    const nameChangeHandler = event => {
        dispatchUserData({ val: event.target.value, type: "INPUT_NAME" })
        // setName(event.target.value);
    }

    const ageChangeHandler = event => {
        dispatchUserData({ val: event.target.value, type: "INPUT_AGE" })
        // setAge(event.target.value);
    }

    const addUserHandler = event => {
        event.preventDefault();
        props.addUser({
            id: Date.now().toString(),
            name: userData.name,
            age: userData.age,
            college: collegeRef.current.value
        });
        dispatchUserData({ type: "INPUT_RESET" })
        // setName("");
        // setAge("");
        collegeRef.current.value = "";
    }

    return (
        <Card className="add_user__form">
            <form onSubmit={addUserHandler}>
                <label>Username</label>
                <input type="text" value={userData.name} onChange={nameChangeHandler} />
                <label>Age (in Years)</label>
                <input type="number" value={userData.age} onChange={ageChangeHandler} />
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