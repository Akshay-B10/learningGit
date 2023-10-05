import React from "react";

function ExpenseForm() {
    let date = "";
    let desc = "";
    let amt = "";
    const changeHandler = () => {
        const newDate = document.getElementById("date").value;
        const newDesc = document.getElementById("desc").value;
        const newAmt = document.getElementById("amt").value;
        if (date !== newDate) {
            console.log(newDate);
        } else if (desc !== newDesc) {
            console.log(newDesc);
        } else if (amt !== newAmt) {
            console.log(newAmt);
        };
        date = newDate;
        desc = newDesc;
        amt = newAmt;
    }

    return (
        <div onChange={changeHandler}>
            <div>
                <label>Enter Date</label>
                <input id="date" type="date" />
            </div>
            <div>
                <label>Enter Description</label>
                <input id="desc" type="text" />
            </div>
            <div>
                <label>Enter Amount</label>
                <input id="amt" type="text" />
            </div>
            <button type="button">Add Expense</button>
        </div>
    );
}

export default ExpenseForm;