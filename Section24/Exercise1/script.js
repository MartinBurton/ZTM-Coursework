const fs = require('fs');

fs.readFile('input.txt', (err, data) => {
  // Set up timer and deal with any errors
  console.time('challengeTimer');
  if (err) {
    console.log('Error: ', err);
  }

  // SOLUTION
  let floorNumber = 0;
  let foundBasement = false;
  
  data.forEach((element, index) => {
    element === 40 ? floorNumber++ : floorNumber--;
    if (floorNumber === -1 && !foundBasement) {
      console.log('Basement entered at character ', index + 1);
      foundBasement = true;
    }
  });
  console.log('Floor Number: ', floorNumber);

  // End timer and output value
  console.timeEnd('challengeTimer');
})