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

// Funtion to add expense
function addExpense(e){
    e.preventDefault()
    const expAmt = document.querySelector("#expAmt");
    const desc = document.querySelector("#desc");
    const category = document.querySelector("#category");
    if (expAmt.value == "" || desc.value == "" || category.value == "") {
        alert("Please fill required details");
    } else
    {
        // Storing Data in local storage
        const userDetails = {};
        userDetails.Amount = expAmt.value;
        userDetails.Desc = desc.value;
        userDetails.Category = category.value;
        localStorage.setItem(srNo, JSON.stringify(userDetails));

        // Displaying users
        const li = document.createElement("li");
        li.className = "list-group-item";

        // to access local storage using key
        li.setAttribute("value", srNo);
        li.appendChild(document.createTextNode(`${expAmt.value} - ${desc.value} - ${category.value}`));

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
        srNo++;
    }
}

// Function to delete expense
function delExpense(e){
    if (e.target.classList.contains('btn-danger')) {
        if (confirm('Are You Sure?')) {
            let li = e.target.parentElement;
            let key = li.getAttribute("value");
            localStorage.removeItem(key);
            ul.removeChild(li);
        }
    }
}

// Function to edit expense
function editExpense(e){
    if (e.target.classList.contains("btn-outline-primary")){
        let li = e.target.parentElement;
        let key = li.getAttribute("value");
        let expDetails = JSON.parse(localStorage.getItem(key));
        document.querySelector("#expAmt").value = expDetails.Amount;
        document.querySelector("#desc").value = expDetails.Desc;
        document.querySelector("#category").value = expDetails.Category;
        localStorage.removeItem(key);
        li.parentElement.removeChild(li);
    }
}