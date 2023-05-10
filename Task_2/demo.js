// Parent node
const itemLi = document.querySelector("#items");
itemLi.parentNode.style.backgroundColor = "lightgrey";
itemLi.parentElement.style.fontStyle = "italic";
// parentNode and parentElement is giving same result

//Child node
console.log(itemLi.childNodes);
// gives array of nodes; text representing gap in html is present as element

console.log(itemLi.children);
// gives array of nodes; always use children method
itemLi.children[2].innerText = "3rd Element";

console.log(itemLi.firstChild);
// similar child node it gives text; if gap is present in html

itemLi.firstElementChild.style.fontFamily = "cursive";
// It is similar to children; both firstChild and firstElement gives single node

// lastChild and lastElementChild
console.log(itemLi.lastChild);
itemLi.lastElementChild.textContent = "I am last element child";

// nextSibling and nextElementSibling
console.log(itemLi.nextSibling);
console.log(itemLi.nextElementSibling);
// if no next element sibling is not present; null will be the output
itemLi.children[3].nextElementSibling.className = "list-group-item";

// previousSibling and previousElementSibling
console.log(itemLi.previousSibling);
itemLi.previousElementSibling.style.color = "darkgreen";
// create div
const div = document.createElement("div");
// add attribute
div.setAttribute("title", "Hello");
// create text node
const textNode = document.createTextNode("HELLo word");
// add text node
div.appendChild(textNode);
console.log(div);

// add div tag before item lister
const container = document.querySelector("header .container");
console.log(container);
const header = document.querySelector("#header-title");
console.log(header);
container.insertBefore(div, header);

// add li tag
const liTag = document.createElement("li");
liTag.className = "list-group-item";
liTag.appendChild(document.createTextNode("HELLo word"));
itemLi.insertBefore(liTag, itemLi.firstElementChild);