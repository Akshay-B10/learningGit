/*
const header = document.getElementById("main-header");
header.style.borderBottom = "solid 3px black";
const formTitle = document.getElementById("main").firstElementChild;
formTitle.innerHTML = "<b>Add Items</b>";
formTitle.style.color = "green";
*/
// console.log("Hello World")
/*
const liGrp = document.getElementsByClassName("list-group-item");
liGrp[2].style.backgroundColor = "green";
for (let i = 0; i < liGrp.length; i++)
{
    liGrp[i].style.fontWeight = "bold";
}
const lastLi = document.getElementsByClassName("list-not-same");

// lastLi is array of Node elements even if there is only one element; Imp to remember

const li = document.getElementsByTagName("li");
lastLi[0].style.backgroundColor = "purple";
li[4].style.color = "white";
*/

// Using querySelector
const secLi = document.querySelector("li:nth-child(2)");
secLi.style.backgroundColor = "green";

const thirdLi = document.querySelector(".list-group-item:nth-child(3)");
thirdLi.style.display = "none";

// Using querySelectorAll
const liGrp = document.querySelectorAll(".list-group-item");
liGrp[1].style.color = "lightgreen";

const oddEle = document.querySelectorAll("li:nth-child(odd)");
for (let i = 0; i < oddEle.length; i++)
{
    oddEle[i].style.backgroundColor = "green";
    oddEle[i].style.color = "white";
}