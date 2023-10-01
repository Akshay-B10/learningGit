import "./ExpenseDetails.css";

const ExpenseDetails = props => {
    const amount = props.amount;
    const description = props.description;
    const location = props.location;
    return (
        <>
            <div className="expense-amount">&#8377; {amount}</div>
            <div className="expense-description">{description}</div>
            <div className="expense-location">{location}</div>
        </>
    )
};

export default ExpenseDetails;