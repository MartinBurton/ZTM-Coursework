
const roomTitle =  document.getElementById("roomTitle");
const roomText = document.getElementById("roomText");
const choiceList = document.getElementById("choices");

const setRoomTitle = (newTitle) => {
    roomTitle.textContent = newTitle;
}

const setRoomText = (newRoomText) => {
    roomText.textContent = newRoomText;
}

const clearChoices = () => {
    let choiceItems = document.querySelectorAll("li");
    choiceItems.forEach(item => {
        choiceList.removeChild(item);
    });
}

const createChoice = (choiceText) => {
    let newChoice = document.createElement("li");
    newChoice.appendChild(document.createTextNode(choiceText));
    choiceList.appendChild(newChoice);
}

const gameStart = () => {
    setRoomTitle("Welcome to this simple game");
    setRoomText("This is the start of a beautifull adventure, filled with intregue and deception.  Only enter if you feel you are ready for the journey of a lifetime.");
    clearChoices();
    createChoice("Start the adventure");
}

gameStart();


