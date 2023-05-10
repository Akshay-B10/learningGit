var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e) {
    e.preventDefault();

    // Get input value
    var newItem = document.getElementById('item').value;

    // Create new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create del button element
    var deleteBtn = document.createElement('button');

    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append button to li
    li.appendChild(deleteBtn);

    // Append li to list
    itemList.appendChild(li);

    // To add Edit button beside delete
    let editBtn = document.createElement("button");
    editBtn.className = "btn btn-primary mr-2 btn-sm float-right";
    editBtn.appendChild(document.createTextNode("Edit"));
    li.append(editBtn);

    // add description
    let itemDesc = document.createElement("p");
    itemDesc.appendChild(document.createTextNode(form.children[1].value));
    itemDesc.style.color = "grey";
    li.appendChild(itemDesc);

}

// Remove item
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are You Sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter Items
function filterItems(e) {
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get list
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function (item) {
        var itemName = item.firstChild.textContent;
        let desc = item.lastElementChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1 || desc.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });


}
/*
let editBtn = document.createElement("button");
editBtn.className = "btn btn-primary mr-2 btn-sm float-right";
editBtn.appendChild(document.createTextNode("Edit"));
*/
let liList = itemList.children;
for (let i = 0; i < liList.length; i++) {
    let editBtn = document.createElement("button");
    editBtn.className = "btn btn-primary mr-2 btn-sm float-right";
    editBtn.appendChild(document.createTextNode("Edit"));
    liList[i].append(editBtn);
}
/*
liList[0].append(editBtn);
liList[1].append(editBtn);
liList[2].append(editBtn);
liList[3].append(editBtn);
*/

// Add description for items
for (let i = 0; i < liList.length; i++)
{
    let itemDesc = document.createElement("p");
    itemDesc.appendChild(document.createTextNode(`Item Description for Item ${i + 1}`));
    itemDesc.style.color = "grey";
    liList[i].appendChild(itemDesc);
}

let descInput = document.createElement("input");
descInput.type = "text";
descInput.id = "desc";
descInput.className = "form-control mr-2";
descInput.placeholder = "Enter description..";
form.insertBefore(descInput, form.children[1]);
form.children[0].placeholder = "Enter item name";
