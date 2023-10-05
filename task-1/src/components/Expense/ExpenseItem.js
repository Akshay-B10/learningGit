import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = props => {

    const [amount, setAmount] = useState(props.amount);

    const clickHandler = () => {
        setAmount(100);
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <ExpenseDetails
                amount={amount}
                description={props.description}
                location={props.location} />
            <button onClick={clickHandler}>Make 100</button>
        </Card>
    );
}

export default ExpenseItem;