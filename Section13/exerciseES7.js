// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

dragons.includes('John'); // Returns false as the array does not include the string 'John'


// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

dragons.filter(name => name.includes("John"));
console.log(johnDragons);

// returns only second element which contains the substring "John"

// #3) Create a function that calulates the power of 100 of a number entered as a parameter
const power100 = (x) => x**100;

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result
// not defined -- infinity

