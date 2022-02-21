// ES9 Course Notes
// Object spread opperator

// For arrays we have been able to use the spread opperator (...) but until ES9 this was not possible with objects
restParam(1, 2, 3, 4, 5);

function restParam(p1, p2, ...p3) {
  // p1 = 1
  // p2 = 2
  // p3 = [3, 4, 5]
}

// As of ES9 we can now use the ... opperator as below.
const myObject = {
  a: 1,
  b: 2,
  c: 3
};

const { a, ...x } = myObject;
// a = 1
// x = { b: 2, c: 3 }

//  ------------------------------------------------------------

// .finally() 
// Used in the non-Async/Await way.
const urls = [
  'https://swapi.py4e.com/api/people/1',
  'https://swapi.py4e.com/api/people/2',
  'https://swapi.py4e.com/api/people/3',
  'https://swapi.py4e.com/api/people/4'
]

Promise.all(urls.map(url => fetch(url).then(people => people.json())))
  .then(array => {
    throw Error
    console.log('1', array[0])
    console.log('2', array[1])
    console.log('3', array[2])
    console.log('4', array[3])
  })
  .catch(err => console.log('ughhhh fix it!', err))
  // This action is always run after the promise. Even if the promise is rejected or an error is caught.
  .finally(() => console.log('extra action here')) 

// New for await of feature:
// Allows us to loop through an array of promises. 

const getData2 = async function() {
  const arrayOfPromises = urls.map(url => fetch(url));
  // Lists each of the requests that are made.
  for (const request of arrayOfPromises) {
    console.log(request);
  }

  // Loop through each of the promises in an Async way.
  for await (const request of arrayOfPromises) {
    const data = await request.json();
    console.log(data)
  }
  // In this case, for-await takes each item from the array and waits for it to resolve. 
  // You'll get the first response even if the second response isn't ready yet, but you'll always get the responses in the correct order.
}


