import "./ExpenseItem.css";

function ExpenseItem(props) {
    return (
        <div className = "expense-item">
            <div className = "expense-date">{props.date.toString().slice(0, 15)}</div>
            <div className = "expense-amount">&#8377; {props.amount}</div>
            <div className = "expense-description">{props.description}</div>
            <div className = "expense-location">{props.location}</div>
        </div>
    );
}

export default ExpenseItem;