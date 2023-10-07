import React, { useState } from "react";

function ExpenseForm() {
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");

    const dateChangeHandler = event => {
        setDate(event.target.value);
    }

    const descriptionChangeHandler = event => {
        setDescription(event.target.value);
    }

    const amountChangeHandler = event => {
        setAmount(event.target.value);
    }

    const submitHandler = event => {
        event.preventDefault();
        const newExpenseData = {
            date: date,
            description: description,
            amount: amount
        }
        console.log(newExpenseData);
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <div onChange={dateChangeHandler}>
                    <label>Enter Date</label>
                    <input type="date" />
                </div>
                <div onChange={descriptionChangeHandler}>
                    <label>Enter Description</label>
                    <input type="text" />
                </div>
                <div onChange={amountChangeHandler}>
                    <label>Enter Amount</label>
                    <input type="text" />
                </div>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;