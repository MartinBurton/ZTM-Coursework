const stateData = [
    {
        title: "Welcome to this simple game",
        text: "This is the start of a beautifull adventure, filled with intregue and deception.  Only enter if you feel you are ready for the journey of a lifetime.",
        choices: [
            {
                text: "Start the adventure",
                nextState: 1
            }
        ]
    },
    {
        title: "State 1",
        text: "From here you can go to one of two more states",
        choices: [
            {
                text: "Go to state 2",
                nextState: 2 
            },
            {
                text: "Go to state 3",
                nextState: 3
            }
        ]
    },
    {
        title: "State 2",
        text: "From here you can go to one of one state",
        choices:[
            {
                text: "Go to state 1",
                nextState: 1
            }
        ]
    },
    {
        title: "State 3",
        text: "From here you can go to one of one state",
        choices:[
            {
                text: "Go to state 1",
                nextState: 1
            }
        ]
    }
];

// Cache page elements
const roomTitle =  document.getElementById("roomTitle");
const roomText = document.getElementById("roomText");
const choiceList = document.getElementById("choices");

// Game variables and constants
let currentState = 0;

const moveState = (event) => {
    currentState = event.target.attributes[0].nodeValue;
    updatePage(currentState);
}

const createChoice = (choice) => {
    // Not caching the li elements as they will change with each update
    let newChoice = document.createElement("li");
    newChoice.appendChild(document.createTextNode(choice.text));
    newChoice.setAttribute("value", choice.nextState);
    newChoice.addEventListener("click", moveState);
    choiceList.appendChild(newChoice);
}

const updatePage = (state) => {
    roomTitle.textContent = stateData[state].title;
    roomText.textContent = stateData[state].text;
    let choiceItems = document.querySelectorAll("li");
    choiceItems.forEach(item => choiceList.removeChild(item));
    stateData[state].choices.forEach(choice => createChoice(choice));
}

updatePage(currentState);


