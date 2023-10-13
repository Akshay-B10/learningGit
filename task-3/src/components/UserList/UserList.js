import React from "react";

import UserItem from "./UserItem";

const UserList = props => {
    const users = props.users;
    return <ul>
        {users.map(user => <UserItem
            key={user.id}
            name={user.name}
            age={user.age}
        />)}
    </ul>
};

export default UserList;