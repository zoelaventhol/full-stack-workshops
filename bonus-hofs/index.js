// Functions // Map // forEach // Filter // Every // Any // Reduce

// Create a function that takes an array of numbers as an argument
// and return the sum of odd numbers.

​
// TEST
// console.log(sumOfOdds([1, 2, 3, 4, 5])) // expected result -> 9
// console.log(sumOfOdds([10, 20, 33, 44, 55])) // expected result -> 88​


// Create a function that takes 2 arguments, an array of strings and a number.
// return a new array with the only the words with more letters than the number given
​
// TEST
// console.log(wordsBySize(["Rio", "Barcelona", "Lagos", "Lima", "Kathmandu"], 4))
// expected result -> ["Barcelona", "Lagos", "Kathmandu"]

​
// Create a function that takes an array of numbers and returns a boolean
// if every number is greater than it's position on the the array.
​
​
// TEST
// console.log(numbersGreaterThanIndex([5, 6, 7, 8, 9])) // -> true
// console.log(numbersGreaterThanIndex([5, 16, 1, 8, 9])) // -> false
​
​​
// Create a function that takes an array of temperatures in Fahrenheit,
// an return a new array with the temperatures in Celsius
// Hint: C = (F - 32) * 5/9
​
​
// TEST
// console.log(fahrenheitToCelsius([32, 50, 60.8, 23, 86])) // -> [0, 10, 16, -5, 30]
​
​
​
​
// Create a function that takes an array of objects containing first name and last name,
// and returns a new array of objects with the the same key values + initals of each first and last name capitalized.
// i.e {.... initials: "MR"}
​
​
​
// TEST
// const ellie = {first_name: "Ellie", last_name: "Racheeva"}
// const arabella = {first_name: "Arabella", second_name: "Moss"}
​
// console.log(addInitialsToPerson([ellie, arabella]))
// -> [{first_name: "Ellie", last_name: "Racheeva", initials: "ER"},
//     {first_name: "Arabella", second_name: "Moss", initials: "AM"}]
​
​
​
​
​
// Create a function that takes an array of arrays with a name and age
// Return a true or false if any of the persons can drive
// Hint: Driving age is 18
​
​
// TEST
// const roadTripGroup = [["Iria", 14], ["Ionna", 16], ["Janet", 20]]
// console.log([roadTripGroup]) // -> true
​
// const goingToTaylorSwiftConcertGroup = [["Iria", 13], ["Bree", 16], ["Sarah", 13]]
// console.log([goingToTaylorSwiftConcertGroup]) // -> false
​
​
​
​
// Create a function that takes an array of words and returns a new
// array with a "!" at the end of every word
​
​
// TEST
// console.log(addBang(["Rios is the best city", "Marielle presente", "Don't Worry", "Be Happy"]))
// -> ["Rios is the best city!", "Marielle presente!", "Don't Worry!", "Be Happy!"]
​
​
​
// Create a function that takes and array of numbers and sum them all togheter
// Constrain: use .reduce()
​
// TEST
// console.log(sumAllNumbers[1, 2, 3, 4, 5]) // -> 15