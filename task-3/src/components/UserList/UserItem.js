import React from "react";

import "./UserItem.css";

const UserItem = props => {
    return (
        <li className="item">
            {`${props.name} (${props.age} years old): ${props.college}`}
        </li>
    );
};

export default UserItem;