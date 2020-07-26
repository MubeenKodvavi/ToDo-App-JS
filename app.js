var list = document.getElementById("list");

function addToDo() {
    var toDoItem = document.getElementById("toDoItem");

    if (!toDoItem.value) {
        alert("Enter text first, please");
        return;
    }

    var li = document.createElement("li");
    var liText = document.createTextNode(toDoItem.value);
    li.appendChild(liText);

    var dltBtn = document.createElement("button");
    var dltIcon = document.createElement("i");
    dltIcon.setAttribute("class", "fas fa-trash-alt");
    var dltTxt = document.createTextNode(" DELETE");
    dltBtn.setAttribute("class", "btn delete");
    dltBtn.setAttribute("onclick", "deleteItem(this)");
    dltBtn.appendChild(dltIcon);
    dltBtn.appendChild(dltTxt);

    var editBtn = document.createElement("button");
    var editIcon = document.createElement("i");
    editIcon.setAttribute("class", "fas fa-edit");
    editBtn.setAttribute("class", "btn edit");
    var editText = document.createTextNode(" EDIT");
    editBtn.setAttribute("onclick", "editItem(this)");
    editBtn.appendChild(editIcon);
    editBtn.appendChild(editText);

    li.appendChild(editBtn);
    li.appendChild(dltBtn);
    list.appendChild(li);

    toDoItem.value = "";
}

function deleteItem(e) {
    e.parentNode.remove();
}

function editItem(e) {
    var val = prompt("Enter updated value", e.parentNode.firstChild.nodeValue);
    if (!val) {
        alert("No text entered! Changes unsaved");
        return;
    }
    e.parentNode.firstChild.nodeValue = val;
}

function deleteAll() {
    list.innerHTML = "";
}