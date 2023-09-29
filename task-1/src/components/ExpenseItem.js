import "./ExpenseItem.css";

function ExpenseItem() {
    const date = new Date(2023, 8, 29);
    const amount = 100;
    const description = "Food";
    const location = "MCD, XYZ City";
    return (
        <div className = "expense-item">
            <div className = "expense-date">{date.toString().slice(0, 15)}</div>
            <div className = "expense-amount">&#8377; {amount}</div>
            <div className = "expense-description">{description}</div>
            <div className = "expense-location">{location}</div>
        </div>
    );
}

export default ExpenseItem;