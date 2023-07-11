const containerDiv = document.querySelector(".container");
const ul = document.createElement("ul");

ul.className = "list-group";
containerDiv.appendChild(ul);

const btn = document.querySelector(".btn");

// Add User Details
btn.addEventListener("click", onSubmit);

// Delete User Details
ul.addEventListener("click", delUser);

// Edit User Details
ul.addEventListener("click", editDetails);

// Event Listener for getting data when user reloads page
window.addEventListener("DOMContentLoaded", getStoredData);

function onSubmit(e) {
    e.preventDefault();
    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const phone = document.querySelector("#phone");
    if (name.value == "" || email.value == "" || phone.value == "") {
        alert("Please fill required details");
    } else {
        // Button color change
        document.querySelector(".btn").className = "btn btn-success";

        // Button color to default
        setTimeout(() => {
            document.querySelector(".btn").className = "btn btn-primary";
        }, 1000);
        
        // Storing data in backend servernp
        const userDetails = {};
        userDetails.name = name.value;
        userDetails.email = email.value;
        userDetails.phone = phone.value;
        axios
            .post("http://localhost:4000/add-user", userDetails)
            .then((response) => {
                displayDetails(response.data);
            })
            .catch((err) => console.log(err));
    }
}

// Function to delete details
function delUser(e) {
    if (e.target.classList.contains('btn-danger')) {
        if (confirm('Are You Sure?')) {
            let li = e.target.parentElement;
            let id = li.getAttribute("value");
            axios
                .get(`http://localhost:4000/delete-user?id=${id}`)
                .then(() => console.log("User Deleted"))
                .catch((err) => console.log(err));
            ul.removeChild(li);
        }
    }
}

// Function to edit details
function editDetails(e) {
    if (e.target.classList.contains("btn-outline-primary")) {
        let li = e.target.parentElement;
        let id = li.getAttribute("value");
        // From server data will be deleted.
        axios
            .get(`http://localhost:4000/edit-user?id=${id}`)
            .then((res) => {
                document.querySelector("#name").value = res.data.name;
                document.querySelector("#email").value = res.data.email;
                document.querySelector("#phone").value = res.data.phone;
            })
            .catch((err) => console.log(err));
        li.parentElement.removeChild(li);
    }
}

//Function to Display Details
function displayDetails(userDetails) {
    // Displaying users
    const li = document.createElement("li");
    li.className = "list-group-item";

    // to access user by id
    li.setAttribute("value", userDetails.id);
    li.appendChild(document.createTextNode(`Name: ${userDetails.name}, Email: ${userDetails.email}, Phone: ${userDetails.phone}`));

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

// Function to get stored Data
function getStoredData() {
    axios
        .get("http://localhost:4000/get-users")
        .then((res) => {
            for (let i = 0; i < res.data.length; i++) {
                displayDetails(res.data[i]);
            }
        })
        .catch((err) => console.log(err));
}