async function addUser(event) {
    event.preventDefault();
    try {
        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;
        if (name == "" || email == "" || password == "") {
            return alert("Please fill required details.");
        }
        const res = await axios.post(`${baseUrl}/user/add`, {
            name: name,
            email: email,
            password: password
        });
        alert(res.data.message);
        document.querySelector("#name").value = "";
        document.querySelector("#email").value = "";
        document.querySelector("#password").value = "";
    } catch (err) {
        alert(err.response.data.message);
    }
};

// Main code

var baseUrl = "http://localhost:3000";

document.querySelector("#signup").addEventListener("click", addUser);