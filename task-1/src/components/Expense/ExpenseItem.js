import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "./Card";
import "./ExpenseItem.css";

const ExpenseItem = props => {
    const clickHandler = () => {
        console.log("clicked!!");
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <ExpenseDetails
                amount={props.amount}
                description={props.description}
                location={props.location} />
            <button onClick={clickHandler}>Delete Expense</button>
        </Card>
    );
}

export default ExpenseItem;