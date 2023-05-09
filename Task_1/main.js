/*
function getCall(event){
    event.preventDefault();
    const name = document.getElementById("name").value;
    console.log(name);
    console.log(document.getElementById("email").value);
    console.log(document.getElementById("phone").value);
    console.log(document.getElementById("date").value);
    console.log(document.getElementById("time").value);
}
*/
/*
const ul = document.getElementsByTagName("ul")
ul.firstElementChild.style.color = "red"
ul.children[1].style.color = "green"
*/

// const myForm = document.querySelector("form");
const btn = document.querySelector(".btn");
btn.addEventListener("click", e =>{
    // e.preventDefault();
    const Name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const phone = document.querySelector("#phone");
    const date = document.querySelector("#date");
    const time = document.querySelector("#time");
    if (Name.value == "" || email.value == "" || phone.value == "" || date.value == "" || time.value == "")
    {
        alert("Please fill required details");
    } else
    {
        document.querySelector(".btn").style.background = "red";
        console.log(Name.value);
        console.log(email.value);
        console.log(phone.value);
        console.log(date.value, time.value);
    }

})
btn.addEventListener("mouseover", e =>{
    // e.preventDefault();
    document.querySelector(".btn").style.color = "black";
});
btn.addEventListener("mouseout", e =>{
    // e.preventDefault();
    document.querySelector(".btn").style.color = "white";
});
