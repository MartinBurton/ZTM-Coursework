// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
let forEachArray = [];
array.forEach(element => {
  forEachArray.push(element.username + "!");
});
console.log(`forEach`, forEachArray); 
// Output is:
// forEach (4) ['john!', 'becky!', 'susy!', 'tyson!']


//Create an array using map that has all the usernames with a "? to each of the usernames
const mapArray = array.map(element => {
  return element.username + "?"
});
console.log(`map`, mapArray); 
// Output is:
// map (4) ['john?', 'becky?', 'susy?', 'tyson?']


//Filter the array to only include users who are on team: red
const filterArray = array.filter(element => {
  return element.team === "red";
});
console.log(`filter`, filterArray);
// Output is:
// filter (2) [{…}, {…}]
//        0: {username: 'john', team: 'red', score: 5, items: Array(3)}
//        1: {username: 'susy', team: 'red', score: 55, items: Array(3)}
//        length: 2
//        [[Prototype]]: Array(0)

//Find out the total score of all users using reduce
const reduceArray = array.reduce((acc, element) =>{
  return acc + element.score;
}, 0);
console.log(`reduce`, reduceArray); 
// Output is:
// reduce 71

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num * 2;
})
// (1), i is the index of the array the loop is accessing
// (2), 
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map(num => { return num * 2 });
console.log(`newArray`, newArray);

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const newList = array.map(element => {
  let outputElement = {};
  outputElement["username"] = element.username;
  outputElement["team"] = element.team;
  outputElement["score"] = element.score;
  let newItems = element.items.map(item =>{
    return item + `!`;
  });
  outputElement["items"] = newItems;
  return outputElement;
});
console.log(`newList`, newList);
console.log(`oldArray`, array);
