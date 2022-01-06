# Notes on Arrays

## Defining and Accessing an Array

An array is defined in JavaScript in the following way

` var list = ["tiger","cat","bear","bird"]; `

Access elements of the array in this way

`list[a];`

Where `a` is the index of the required element in the aray counting from 0.  For example

`list[2];`

will return ***bear***

## Array Methods

### shift
`list.shift();`
This shifts the elements in the array one step to the left, returning the now displaced element *(element 0)*. For example
` list.shift(); `
will return
*"tiger"*
and the list will now contain the following elements
*["cat", "bear", "bird"]*

### pop
`list.pop()`
this removes and returns the last element in the array.  For example
` list.pop(); `
will return
*"bird"*
and the list will now contain the following elements
*["cat", "bear"]*

### push
` list.push(argument) `
this adds the elements to the end of the array and returns the new ***'length'*** of the array. For example
` list.push("elephant");`
will return
*3*
and the list will now contain the following elements
*["cat", "bear", "elephant"]*

### concat
` list.concat(array) `
this takes the values of the origional array and the given array and returns a new array with the combined elements. This does not assign the new elements to the origional array.  For example
`list.concat(["bee", "deer"]);`
will return
*["cat", "bear", "elephant", "bee", "dear"]*
and the list will still contain the following elements
*["cat", "bear", "elephant"]*


### sort
` list.sort() `
this takes the array and sorts the elements either alphabeticaly or numericaly depending on the types in the array. It returns the newly sorted array. For example
` list.sort() `
will return
*["bear","cat","elephant"]*