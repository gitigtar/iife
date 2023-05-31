const numbers = [1, 2]

(function () {
  for (const number of numbers) {
    console.log(number)
  }
})()

// This script will crashes with the error:
// TypeError: [1,2] is not a function
//
// What is the reason?
