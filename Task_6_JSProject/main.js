var baseUrl = "https://crudcrud.com/api/ad8e6d1a9c6542bd80cfa813b745717a";
var pendingCount = 0;
var doneCount = 0;
const containerDiv = document.querySelector(".container"); 

const pendingHead = document.createElement("h3");
pendingHead.style.color = "red";
pendingHead.innerText = "Pending ToDo";
pendingHead.style.display = "none";
containerDiv.appendChild(pendingHead);

const ulPending = document.createElement("ul");
ulPending.className = "list-group";
containerDiv.appendChild(ulPending);

const completedHead = document.createElement("h3");
completedHead.style.color = "darkgreen";
completedHead.innerText = "Completed ToDo";
completedHead.style.display = "none";
containerDiv.appendChild(completedHead);

const ulDone = document.createElement("ul");
ulDone.className = "list-group";
containerDiv.appendChild(ulDone);

const btn = document.querySelector(".btn");

// Event Listener for getting data when user reloads page
window.addEventListener("DOMContentLoaded", getStoredData);

// Add todo in Pending list
btn.addEventListener("click", addTodo);

// Delete User Details from ui and local storage
ulPending.addEventListener("click", delTodo);

// Add todo in Done list
ulPending.addEventListener("click", displayCompletedTodo);

async function addTodo(e) {
    try {
        e.preventDefault();
        const todo = document.querySelector("#todo");
        const desc = document.querySelector("#desc");
        if (todo.value == "" || desc.value == "") {
            alert("Please fill required details");
        } else {
            const todoDetails = {};
            todoDetails.Todo = todo.value;
            todoDetails.Desc = desc.value;
            todoDetails.Status = false;
            // displayTodoPending(todoDetails);
            const res = await axios.post(`${baseUrl}/todoApp`, todoDetails);
            todoDetails._id = res.data._id;
            displayTodoPending(todoDetails);
        }

    } catch (err) {
        console.log(err);
    }
}

// Function to Display Details
function displayTodoPending(todoDetails) {
    // Displaying users
    const li = document.createElement("li");
    li.className = "list-group-item";

    // to access cloud storage using key
    li.setAttribute("value", todoDetails._id);
    li.appendChild(document.createTextNode(`Todo: ${todoDetails.Todo}; Desc: ${todoDetails.Desc}`));

    // Add Tick button
    const checkBtn = document.createElement("input");
    checkBtn.setAttribute("type", "button");
    // checkBtn.setAttribute("value", "&#x2713");
    checkBtn.setAttribute("value", "Done");
    checkBtn.className = "btn btn-outline-primary mx-2";
    li.appendChild(checkBtn);

    // Add Delete button
    const delBtn = document.createElement("input");
    delBtn.setAttribute("type", "button");
    delBtn.setAttribute("value", "Delete");
    delBtn.className = "btn btn-danger";
    li.appendChild(delBtn);
    if (pendingCount == 0) {
        pendingHead.style.display = "inline-block";
        pendingCount++;
    }
    ulPending.appendChild(li);
}

// Function to delete details
async function delTodo(e) {
    try {
        if (e.target.classList.contains('btn-danger')) {
            if (confirm('Are You Sure?')) {
                let li = e.target.parentElement;
                let key = li.getAttribute("value");
                let res = await axios.delete(`${baseUrl}/todoApp/${key}`);
                console.log(res);
                pendingCount--;
                if (pendingCount == 0) {
                    pendingHead.style.display = "none";
                }
                ulPending.removeChild(li);
            }
        }
    } catch (err) {
        console.log(err);
    }
}

// Function to add todo in done list
async function displayCompletedTodo(e) {
    try {
        if (e.target.classList.contains("btn-outline-primary")) {
            let li = e.target.parentElement;
            let key = li.getAttribute("value");
            let res = await axios.get(`${baseUrl}/todoApp/${key}`);
            let todo = res.data.Todo;
            let desc = res.data.Desc;
            let x = await axios.put(`${baseUrl}/todoApp/${key}`, {
                Todo: todo,
                Desc: desc,
                Status: true
            });
            const completedLi = document.createElement("li");
            completedLi.className = "list-group-item";
            completedLi.setAttribute("value", x.data._id);
            completedLi.appendChild(document.createTextNode(li.innerText));
            pendingCount--;
            if (doneCount == 0) {
                completedHead.style.display = "block";
            }
            doneCount++;
            ulDone.appendChild(completedLi);
            if (pendingCount == 0) {
                pendingHead.style.display = "none";
            }
            ulPending.removeChild(li);

        }
    } catch (err) {
        console.log(err);
    }
}

// Function to get stored Data
async function getStoredData() {
    try {
        let res = await axios.get(`${baseUrl}/todoApp`);
        console.log(res);
        for (let i = 0; i < res.data.length; i++) {
            if (res.data[i].Status) {
                displayFromData(res.data[i]);
            } else {
                displayTodoPending(res.data[i]);
            }
        }
    } catch (err) {
        console.log(err);
    }
    
}

function displayFromData(todoDetails) {
    const completedLi = document.createElement("li");
    completedLi.className = "list-group-item";
    completedLi.setAttribute("value", todoDetails._id);
    completedLi.appendChild(document.createTextNode(`Todo: ${todoDetails.Todo}; Desc: ${todoDetails.Desc}`));
    if (doneCount == 0) {
        completedHead.style.display = "block";
    }
    doneCount++;
    ulDone.appendChild(completedLi);
}