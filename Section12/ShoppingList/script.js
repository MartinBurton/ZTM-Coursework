var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.getElementById("todoList");
var listItems = document.querySelectorAll("li");

// Sort out existing list items with the new functionality
// Done here as an experiment, instead of adding to HTML file
listItems.forEach(item => {
    addDoneToggle(item);
    createNewButton(item);
})

// Refactored into function as is repeated twice
// once above for existing li elements and when creating a new element
function addDoneToggle(element){
    element.classList.add("done");
    element.classList.toggle("done");
    element.addEventListener("click", toggleItemDone);
}

// Refactored into function as is repeated twice
// once above for existing li elements and when creating a new element
function createNewButton(parentElement){
    var newButton = document.createElement("button");
    newButton.appendChild(document.createTextNode("Delete"));
    newButton.addEventListener("click", removeListItem);
    parentElement.appendChild(newButton);
}

function inputLength() {
    return input.value.length;
}

function toggleItemDone(event) {
    event.target.classList.toggle("done");
}

function removeListItem(event) {
    // Here event.target.parentElement selects the <li> parrent of the button
    ul.removeChild(event.target.parentElement);
}

function createListElement() {
        var newListElement = document.createElement("li");
        newListElement.appendChild(document.createTextNode(input.value));
        addDoneToggle(newListElement);
        createNewButton(newListElement);
        ul.appendChild(newListElement);
        input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13){
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);