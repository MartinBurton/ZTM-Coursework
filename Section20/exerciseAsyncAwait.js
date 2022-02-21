// Course Notes
// 1. Without Async Await

fetch("https://jsonplaceholder.typicode.com/users/")
  .then(resp => resp.json())
  .then(console.log(resp))

//2. With Async Await
async function fetchUsers() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users/");
  const data = await resp.json();
  console.log(data);
}

// More realistic implementation
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

Promise.all(urls.map(url => 
  fetch(url).then(resp => resp.json()))
).then(array => {
    console.log('Users:', array[0]);
    console.log('Posts:', array[1]);
    console.log('Albums:', array[2]);
}).catch('Oops');

// Becomes

const getData = async function() {
  try {
    const [ users, posts, albums ] = await Promise.all(urls.map(url => 
      fetch(url).then(resp => resp.json()))
    )
    console.log('Users:', users);
    console.log('Posts:', posts);
    console.log('Albums:', albums);
  } catch (err) {
    console.log('Ooops:', err);
  }
}

// Solve the below problems:

// #1) Convert the below promise into async await
fetch("https://jsonplaceholder.typicode.com/users/")
  .then((response) => response.json())
  .then(console.log);

const getUsers = async function() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users/");
  const users = await data.json();
  console.log('Users: ', users);
}

// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData = async function () {
  const [users, posts, albums] = await Promise.all(
    urls.map(async function(url) {
      const data = await fetch(url);
      return data.json();
    })
  );
  console.log("users", users);
  console.log("posts", posts);
  console.log("albums", albums);
};

// #3)Add a try catch block to the #2 solution in order to catch any errors. // Now, use the given array containing an invalid url, so you console.log  //your error with 'oooooops'.
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholdeTYPO.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData = async function () {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map(async function(url) {
        const data = await fetch(url);
        return data.json();
      })
    );
    console.log("users", users);
    console.log("posts", posts);
    console.log("albums", albums);
  } catch (err) {
    console.log('oooooops', err);
  }
};