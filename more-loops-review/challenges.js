/******************** LOOPING THROUGH OBJECTS ********************/
const monthlyBudget = {
  rent: 800,
  groceries: 300,
  utilities: 150,
  transportation: 100,
  entertainment: 50,
};

/* 
1. 
Print the categories (aka keys) of the 'monthlyBudget' object 
*/

// Your code here

/* 
2. 
Now print the values 
*/

// Your code here

/* 
3.
Now, print all keys & values together in a single string. It should look like:

"My monthly budget is: €800,00 for rent, €300,00 for groceries, €150,00 for utilities, €100,00 for transportation, and €50,00 for entertainment"
*/

// Your code here

/* 
4. 
You've had an unexpected emergency expense, and need to tighten your budget!
Decrease all amounts EXCEPT rent and utilities by €20.
*/

// Your code here

/* 
5.
Add up all expenses to get your total for the month. Your output should be: 

"My total budget this month is €1340,00."
*/

// Your code here

/* 
6.
Do something similar for the yearlyBudget: sum the total budget for each month, and console.log it in this format: 
"January's budget is €,00." 
"February's budget is €,00" etc.

Tip: start by getting to know the structure and how to access each piece of the nested object. Then think about how to solve the problem.
- Print the keys
- Print the values
- Print the nested keys
- Print the nested values

Bonus: Also print the total yearly budget at the end of the loop. It should say:
"My total budget for this year is: €,00"
*/
const yearlyBudget = {
  January: {
    rent: 800,
    groceries: 250,
    utilities: 200,
    transportation: 100,
    entertainment: 40,
  },
  February: {
    rent: 800,
    groceries: 260,
    utilities: 190,
    transportation: 100,
    entertainment: 50,
  },
  March: {
    rent: 800,
    groceries: 280,
    utilities: 160,
    transportation: 100,
    entertainment: 70,
  },
  April: {
    rent: 800,
    groceries: 290,
    utilities: 150,
    transportation: 100,
    entertainment: 80,
  },
  May: {
    rent: 800,
    groceries: 300,
    utilities: 140,
    transportation: 100,
    entertainment: 90,
  },
  June: {
    rent: 800,
    groceries: 320,
    utilities: 130,
    transportation: 100,
    entertainment: 100,
  },
  July: {
    rent: 800,
    groceries: 330,
    utilities: 130,
    transportation: 100,
    entertainment: 110,
    travel: 150,
  },
  August: {
    rent: 800,
    groceries: 330,
    utilities: 130,
    transportation: 100,
    entertainment: 110,
    travel: 150,
  },
  September: {
    rent: 800,
    groceries: 300,
    utilities: 140,
    transportation: 100,
    entertainment: 90,
  },
  October: {
    rent: 800,
    groceries: 280,
    utilities: 150,
    transportation: 100,
    entertainment: 70,
  },
  November: {
    rent: 800,
    groceries: 260,
    utilities: 180,
    transportation: 100,
    entertainment: 50,
  },
  December: {
    rent: 800,
    groceries: 250,
    utilities: 190,
    transportation: 100,
    entertainment: 40,
  },
};

// Your code here

/* 
7.
You got a summer bonus! Increase your travel budget in July and August by €100,00 each.
*/

// Your code here

/******************** LOOPING THROUGH ARRAYS ********************/
/* 
8.
Print the indexes of the array, then the values.
Practice all the loops you know! for, for...in, for...of

Reminder: you cannot print the indexes with for...of, so just print the values. ;)
*/
const toDoList = [
  "Get groceries",
  "Study coding",
  "Laundry",
  "Wash the dishes",
  "Call Stefanie",
];

// Your code here

/*
9. 
Print indexes & values together. Output should look like:

"Item 0 is: get groceries."
"Item 1 is: study coding."
etc.
*/

// Your code here

/* 
10.
Everything has become more urgent! Add an exclamation point "!" to the end of each task.
toDoList should now = ["Get groceries!", "Study coding!", "Laundry!", "Wash the dishes!", "Call Stefanie!",];
*/

// Your code here

/*  
11.
There's been inflation! Add €1 to each of your grocery costs.
*/
const groceryCosts = [5.69, 2.42, 6.03, 1.99, 0.79, 4.82];

// Your code here

/*  
12.
Now, add up all your grocery costs and print the result:

"Total grocery bill is: €"
*/

// Your code here

/* 
13.
Print all even numbers in the numbers array below, but increment all odd numbers by 1. Push each incremented value into the incrementedNumbers array. Use a for...of loop. 
*/

const numbers = [32, 65, 14, 88, 5, 73, 105, 521, 556];
const incrementedNumbers = [];

/* 
14.
Was this a fair game? Count the numbers "X"s and "O"s on the tic tac toe board.
Your result should say:

"There were __ Xs and __ Os"

Tip: start by getting to know the structure and how to access each piece of the nested array. Then think about how to solve the problem.
- Print the indexes
- Print the values
- Print the nested indexes
- Print the nested values
- Think about: how can I check what letter this is? How can I count them?
*/
const ticTacToe = [
  ["X", "O", "O"],
  ["X", "O", "X"],
  ["O", "X", "O"],
];

/* 
15.
Same problem as above, but now your grid has 3 layers!
Again: count the number of Xs and Os and print the result in the same format.
Again: start by logging the indexes and values at each layer to get familiar with the structure. Make sure to clean up your console.logs when you're get the final result.
*/
const moreTicTacToe = [
  [["X"], ["O"], ["X"]],
  [["X"], ["X"], ["O"]],
  [["O"], ["O"], ["X"]],
];

/******************** OBJECTS & ARRAYS COMBINED ********************/
/* General tips: as before, start by logging the keys or indexes and the values of each layer of your nested array or object. Get used to accessing each piece of the information first, then it will be easier for you to solve any problem. :) */

/* 
16.
Use a for...of loop to compute the year of birth of each user in the users array. Then, add the following key-value pair to each object in the users array:
yearOfBirth: computedValue
 */
const users = [
  {
    name: "Vanya",
    age: 16,
    job: "student",
  },
  {
    name: "Carlos",
    age: 30,
    job: "developer",
  },
  {
    name: "Alex",
    age: 17,
    job: "student",
  },
  {
    name: "Laila",
    age: 33,
    job: "developer",
  },
  {
    name: "Julian",
    age: 22,
    job: "manager",
  },
];

/* 
17.
Use a for...of loop to print the following sentence for only users who are NOT students.
"<name> is <age> years old, was born in <yearOfBirth> and is a <job>." 
*/

/*
Loop through each day in the chores object and print a sentence to describe each day's chores like this:
"Monday's chores are: sweep, laundry."
"Tuesday's chores are: clean bathroom."
etc.
*/
const chores = {
  Monday: ["Sweep", "Laundry"],
  Tuesday: ["Clean bathroom"],
  Wednesday: ["Mop floors", "Organize closet"],
  Thursday: ["Wash dishes", "Take out trash"],
  Friday: ["Change sheets", "Water plants"],
  Saturday: ["Grocery shopping", "Clean kitchen"],
  Sunday: ["Meal prep", "Relax"],
};
