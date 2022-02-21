// NEW FEATURE: Promise.allSettled()

// Given the following promises...
const promiseOne = new Promise((resolve, reject) =>
    setTimeout(resolve, 3000)
  )
const promiseTwo = new Promise((resolve, reject) =>
    setTimeout(reject, 3000)
  )

// The following statement will give an error
// because promise.all() only resolves if all the given promises resolve.
// in order to make it work we need a .catch() statement to catch the error,
// so our code can continue to execute.
Promise.all([promiseOne, promiseTwo]).then(data => console.log(data));

// New for ES2020 the .allSettled statement returns the promises irispective
// of the result of the promises.
Promise.allSettled([promiseOne, promiseTwo]).then(data => console.log(data));