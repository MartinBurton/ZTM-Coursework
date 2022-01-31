// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
// make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) 
// should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
// Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

// Answer

const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

const organiseArray = (inputArray) => {
    const sortedArray = inputArray.sort(function(a,b){return a-b});
    let returnArray = [];
    sortedArray.map((element, index) => {
        if ( index === 0 || (index > 0 && sortedArray[index-1] != element)) {
            let subArray = sortedArray.filter(subElement => subElement === element);
            (subArray.length > 1) ? returnArray.push(subArray) : returnArray.push(element);
        };
    });
    return returnArray;
};

console.log('organisedArray: ',organiseArray(array)); // Returns - organisedArray: [[1, 1, 1, 1], [2, 2, 2], 4, 5, 10, [20, 20], 391, 392, 591]

// Bonus Answer

const array = [1, "2", "3", 2];

const organiseArray = (inputArray) => {
    const organiseSubArray = (inputSubArray) => {
        const sortedArray = inputSubArray.sort(function(a,b){return a-b});
        let returnSubArray = [];
        sortedArray.map((element, index) => {
            if ( index === 0 || (index > 0 && sortedArray[index-1] != element)) {
                let subArray = sortedArray.filter(subElement => subElement === element);
                (subArray.length > 1) ? returnSubArray.push(subArray) : returnSubArray.push(element);
            };
        });
        return returnSubArray;
    }
    let returnArray = [];
    returnNumberArray = organiseSubArray(inputArray.filter(element => typeof element === "number"));
    returnStringArray = organiseSubArray(inputArray.filter(element => typeof element === "string"));
    if (returnNumberArray.length > 0) returnArray.push(returnNumberArray);
    if (returnStringArray.length > 0) returnArray.push(returnStringArray);
    return returnArray;
};

console.log('organisedArray: ',organiseArray(array));

// -----------------------------------------------------------

// Question 2: Write a javascript function that takes an array of numbers and a target number. 
// The function should find two different numbers in the array that, when added together, give the target number. 
// For example: answer([1,2,3], 4)should return [1,3]

// Answer

const array = [1, 2, 3, 4, 7, 8];
const target = 11;

const findAddends = (numberArray, target) => { 
    let searchArray = numberArray.filter(element => element < target);
    let answer = [];
    searchArray.map(firstAddend => {
        let secondAddend = searchArray.find(searchAddend=> firstAddend + searchAddend === target);
        console.log(`firstAddend: ${firstAddend}, secondAddend: ${secondAddend}`);
        if (secondAddend != undefined) {
            answer = [firstAddend, secondAddend];            
        }
    })
    return answer;
};

console.log('Output: ', findAddends(array, target));