# Exercise 6: Arrays
using this array,
` var array = ["Banana", "Apples", "Oranges", "Blueberries"]; `

1. Remove the Banana from the array.

2. Sort the array in order.

3. Put "Kiwi" at the end of the array.

4. Remove "Apples" from the array.

5. Sort the array in reverse order. (Not alphabetical, but reverse the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])

you should have at the end:
` ["Kiwi", "Oranges", "Blueberries"] `

6. using the following array,access "Oranges".
   ` var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]]; `

## Solutions

1. ` array.shift(); `

2. ` array.sort(); `

3. ` array.push("Kiwi"); `

4. ` array.shift(); `

5. ` array.reverse(); `

6. ` array2[1][1][0]; `

