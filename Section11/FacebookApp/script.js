var database = [
    {
        username: "andrei",
        password: "supersecret"
    },
    {
        username: "sally",
        password: "123"
    },
    {
        username: "ingrid",
        password: "777"
    }
];

var newsfeed = [
    {
        username: "Bobby",
        timeline: "So tired from all that learning!"
    },
    {
        username: "Sally",
        timeline: "Javascript is soooo cool!"
    },
    {
        username: "Mitch",
        timeline: "Javascript is preeety cool!"
    }
];

function isUserValid (username, password) {
    for (let i = 0; i < database.length; i++) {
        if (database[i].username === username && database[i].password === password) {
            return true;
        }
    }
    return false;
}

function signIn(username, password){
   if (isUserValid(username, password)) {
       console.log(newsfeed);
   } else {
       alert("Sorry, your username and password are not valid");
   }
};

var userNamePrompt = prompt("What\'s your username?");
var passwordPrompt = prompt("What\'s your password?");

signIn(userNamePrompt, passwordPrompt);