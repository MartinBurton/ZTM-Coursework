const fs = require('fs');

fs.readFile('./hello.txt', (err, data) => {
  if (err) {
    console.log('Error', err);
  }
  console.log('1. ', data.toString());
})

const file = fs.readFileSync('./hello.txt');
console.log('2. ', file.toString());

// fs.appendFile('./hello.txt', ' This is so cool!', (err) => {
//   if (err) {
//     console.log('Error', err);
//   }
// })

// fs.writeFile('bye.txt', 'Sad to see you go', (err) => {
//   if (err) {
//     console.log('Error', err);
//   }
// })

fs.unlink('./bye.txt', err => {
  if (err) {
    console.log('Error', err);
  }
})