/*
const header = document.getElementById("main-header");
header.style.borderBottom = "solid 3px black";
const formTitle = document.getElementById("main").firstElementChild;
formTitle.innerHTML = "<b>Add Items</b>";
formTitle.style.color = "green";
*/
console.log("Hello World")
const liGrp = document.getElementsByClassName("list-group-item");
console.log(liGrp);
liGrp[2].style.backgroundColor = "green";
for (let i = 0; i < liGrp.length; i++)
{
    liGrp[i].style.fontWeight = "bold";
}