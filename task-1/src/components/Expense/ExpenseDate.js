import "./ExpenseDate.css";

const ExpenseDate = props => {
    const day = props.date.toLocaleString("en-IN", {day: "2-digit"});
    const month = props.date.toLocaleString("en-IN", {month: "long"});
    const year = props.date.getFullYear();
    return (
        <div className = "expense-date">{day}, {month}<br/>{year}</div>
    )
};

export default ExpenseDate;