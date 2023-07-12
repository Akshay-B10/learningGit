var srNo = 1;
const containerDiv = document.querySelector(".container");
const ul = document.createElement("ul");
ul.className = "list-group";
containerDiv.appendChild(ul);

// Addition of expense
const addBtn = document.querySelector(".btn");
addBtn.addEventListener("click", addExpense);

// Deletion of expense
ul.addEventListener("click", delExpense);

// Edit of expense
ul.addEventListener("click", editExpense);

window.addEventListener("DOMContentLoaded", getAllExpenses);

// Function to get all data
function getAllExpenses() {
    axios
        .get("http://localhost:4000/get-all-expenses")
        .then((res) => {
            const expenses = res.data;
            for (let i = 0; i < expenses.length; i++) {
                displayExpense(expenses[i]);
            };
        })
        .catch((err) => console.log(err));
}

// Function to display data using DOM
function displayExpense(expense) {
    // Displaying users
    const li = document.createElement("li");
    li.className = "list-group-item";

    // to access id
    li.setAttribute("value", expense.id);
    li.appendChild(document.createTextNode(`${expense.amount} - ${expense.description} - ${expense.category}`));

    // Add Edit button
    const editBtn = document.createElement("input");
    editBtn.setAttribute("type", "button");
    editBtn.setAttribute("value", "Edit");
    editBtn.className = "btn btn-outline-primary mx-2";
    li.appendChild(editBtn);

    // Add Delete button
    const delBtn = document.createElement("input");
    delBtn.setAttribute("type", "button");
    delBtn.setAttribute("value", "Delete");
    delBtn.className = "btn btn-danger";
    li.appendChild(delBtn);
    ul.appendChild(li);
}

// Funtion to add expense
function addExpense(e) {
    e.preventDefault()
    const expAmt = document.querySelector("#expAmt");
    const desc = document.querySelector("#desc");
    const category = document.querySelector("#category");
    if (expAmt.value == "" || desc.value == "" || category.value == "") {
        alert("Please fill required details");
    } else {
        // Data storage in mysql server
        const expense = {};
        expense.amount = expAmt.value;
        expense.desc = desc.value;
        expense.category = category.value;
        axios
            .post("http://localhost:4000/add-expense", expense)
            .then((res) => {
                displayExpense(res.data);
            })
            .catch((err) => console.log(err));
    }
};

// Function to delete expense
function delExpense(e) {
    if (e.target.classList.contains('btn-danger')) {
        if (confirm('Are You Sure?')) {
            let li = e.target.parentElement;
            let id = li.getAttribute("value");
            // Remove data from server
            axios
                .get(`http://localhost:4000/delete-expense?id=${id}`)
                .then(() => {
                    console.log("Expense Deleted");
                    ul.removeChild(li);
                })
                .catch((err) => console.log(err));
        };
    }
};

// Function to edit expense
function editExpense(e) {
    if (e.target.classList.contains("btn-outline-primary")) {
        let li = e.target.parentElement;
        let id = li.getAttribute("value");
        // Remove data from server
        axios
            .get(`http://localhost:4000/edit-expense?id=${id}`)
            .then((res) => {
                document.querySelector("#expAmt").value = res.data.amount;
                document.querySelector("#desc").value = res.data.description;
                document.querySelector("#category").value = res.data.category;
                li.parentElement.removeChild(li);
            })
            .catch((err) => console.log(err));
    }
};