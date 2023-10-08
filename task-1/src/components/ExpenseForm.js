import React, { useState } from "react";

function ExpenseForm(props) {
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
        props.onAddExpense(newExpenseData);
        setDate("");
        setDescription("");
        setAmount("");
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <div>
                    <label>Enter Date</label>
                    <input type="date" value={date} onChange={dateChangeHandler}/>
                </div>
                <div>
                    <label>Enter Description</label>
                    <input type="text" value={description} onChange={descriptionChangeHandler}/>
                </div>
                <div>
                    <label>Enter Amount</label>
                    <input type="text" value={amount} onChange={amountChangeHandler}/>
                </div>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;