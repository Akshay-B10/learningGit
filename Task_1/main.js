const containerDiv = document.querySelector(".container");
const ul = document.createElement("ul");
ul.className = "list-group";
containerDiv.appendChild(ul);

const btn = document.querySelector(".btn");
btn.addEventListener("click", e => {
    e.preventDefault();
    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const phone = document.querySelector("#phone");
    const date = document.querySelector("#date");
    const time = document.querySelector("#time");
    if (name.value == "" || email.value == "" || phone.value == "" || date.value == "" || time.value == "") {
        alert("Please fill required details");
    } else {
        // Storing data in local storage
        document.querySelector(".btn").className = "btn btn-success";
        const userDetails = {};
        userDetails.Name = name.value;
        userDetails.Email = email.value;
        userDetails.Phone = phone.value;
        userDetails.Date = date.value;
        userDetails.Time = time.value;
        // localStorage.setItem(email.value, JSON.stringify(userDetails));
        // Storing data in cloud server (Crudcrud.com server);
        axios
            .post("https://crudcrud.com/api/061cb24afc7a46f5890b32a6f353aa7b/appointmentData", userDetails)
            .then((res) => {
                console.log(res);
                userDetails._id = res.data._id;
                displayDetails(userDetails);
            })
            .catch((err) => console.log(err));
        // displayDetails(userDetails);
        /*
        // Displaying users
        const li = document.createElement("li");
        li.className = "list-group-item";

        // to access local storage using key
        //li.setAttribute("value", email.value);

        li.appendChild(document.createTextNode(`Name: ${name.value}, Email: ${email.value}, Phone: ${phone.value}, Date: ${date.value}, Time: ${time.value}`));

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
        */
    }

})

// Delete User Details from ui and local storage
ul.addEventListener("click", delUser);

// Edit User Details
ul.addEventListener("click", editDetails);

// Event Listener for getting data when user reloads page
window.addEventListener("DOMContentLoaded", getStoredData);

// Function to delete details
function delUser(e) {
    if (e.target.classList.contains('btn-danger')) {
        if (confirm('Are You Sure?')) {
            let li = e.target.parentElement;
            let key = li.getAttribute("value");
            // localStorage.removeItem(key);
            axios
                .delete(`https://crudcrud.com/api/061cb24afc7a46f5890b32a6f353aa7b/appointmentData/${key}`)
                .then((res) => console.log(res))
                .catch((err) => console.log(err));
            ul.removeChild(li);
        }
    }
}

// Function to edit details
function editDetails(e) {
    if (e.target.classList.contains("btn-outline-primary")) {
        let li = e.target.parentElement;
        let key = li.getAttribute("value");
        let myDetails = JSON.parse(localStorage.getItem(key));
        document.querySelector("#name").value = myDetails.Name;
        document.querySelector("#email").value = myDetails.Email;
        document.querySelector("#phone").value = myDetails.Phone;
        document.querySelector("#date").value = myDetails.Date;
        document.querySelector("#time").value = myDetails.Time;
        localStorage.removeItem(key);
        li.parentElement.removeChild(li);
    }
}

//Function to Display Details
function displayDetails(userDetails) {
    // Displaying users
    const li = document.createElement("li");
    li.className = "list-group-item";

    // to access cloud storage using key
    li.setAttribute("value", userDetails._id);
    li.appendChild(document.createTextNode(`Name: ${userDetails.Name}, Email: ${userDetails.Email}, Phone: ${userDetails.Phone}, Date: ${userDetails.Date}, Time: ${userDetails.Time}`));

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
        .get("https://crudcrud.com/api/061cb24afc7a46f5890b32a6f353aa7b/appointmentData")
        .then((res) => {
            console.log(res);
            for (let i = 0; i < res.data.length; i++) {
                displayDetails(res.data[i]);
            }
        })
        .catch((err) => console.log(err));
}