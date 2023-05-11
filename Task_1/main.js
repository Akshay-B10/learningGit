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
        localStorage.setItem(email.value, JSON.stringify(userDetails));

        // Displaying users
        const li = document.createElement("li");
        li.className = "list-group-item";

        // to access local storage using key
        li.setAttribute("value", email.value);
        li.appendChild(document.createTextNode(`Name: ${name.value}, Email: ${email.value}, Phone: ${phone.value}, Date: ${date.value}, Time: ${time.value}`));

        // Add Delete button
        const delBtn = document.createElement("input");
        delBtn.setAttribute("type", "button");
        delBtn.setAttribute("value", "Delete");
        delBtn.className = "btn btn-danger m-2";
        li.appendChild(delBtn);
        ul.appendChild(li);
    }

})

// Delete User Details from ui and local storage
ul.addEventListener("click", delUser);

function delUser(e){
    if (e.target.classList.contains('btn')) {
        if (confirm('Are You Sure?')) {
            let li = e.target.parentElement;
            let key = li.getAttribute("value");
            localStorage.removeItem(key);
            ul.removeChild(li);
        }
    }
}