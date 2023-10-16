import React from "react";

import UserItem from "./UserItem";
import Card from "../UI/Card";
import "./UserList.css";

const UserList = props => {
    const users = props.users;
    return (
        <Card className="users-box">
            <ul className="ul-list">
                {users.map(user => <UserItem
                    key={user.id}
                    name={user.name}
                    age={user.age}
                    college={user.college}
                />)}
            </ul>
        </Card>
    )
};

export default UserList;