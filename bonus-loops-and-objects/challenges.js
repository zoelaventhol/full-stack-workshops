/********* FOR AND WHILE LOOPS *********/

/* 
1. 
You're a pirate! 🏴‍☠️ 
You have 10 gold coins. 💰

Count your treasure: write a for loop that prints "Arr, I have X gold coins!" for every gold coin you count.
(Where X is the current number of coins.)
*/
let goldCoins = 10;

// heyyyy
// hello world!!

/* 
2. 
Do you know the song "99 Bottles of Beer (or another beverage) On The Wall?" 🍻
If not, here's an example: https://www.youtube.com/watch?v=keRzRp4cLtE :)

Let's write the song! Use a while loop: starting at 99 and looping down until 1, print:

"X bottles of beer on the wall, X bottles of beer - take one down, pass it around"
(Where X is the current number of bottles.)

When there are 0 bottles left, print "No more bottles!"
*/

let bottles = 99;

// Your code here

/* 
3. 
Extract the secret message from the code! 🕵🏽
Write a loop to add every 5th character of the message to the secret code.

You can choose whichever style you prefer: for or while.
At the end of the loop, print the secret message.

For this exercise, it's important to know: 
- Just like arrays, strings are index-based. So if I have:
  - let string = "hello"; string[0] is 'h', string[1] is 'e', string[2] is 'l', etc.
  - Read more here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
- Also like arrays, strings have a .length property: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
*/

let code = "C&La1o$L9^nw7g#gRr*br@a!3at%P4ts$jus4gjv!yFr8";
let secretMessage = "";

// Your code here

/* 
4. 
Count the stars in the constellation! 🌟

Psst, hint: check if the character at each index position is a "*"

Use this to check your work:
console.log(
  stars === 16
    ? `Correct! You counted ${stars} stars.`
    : `Wrong :( You counted ${stars} stars - try again.`
);
*/
let constellation = " *** ** * ****   **    *   ***";
let stars = 0;

// Your code here

/* 
5. 
Redo exercises 1 - 4 using the other type of loop: 
If you wrote if with for, rewrite as a while loop.
If you wrote it with while, rewrite as a for loop.
*/

/********* LOOPING THROUGH OBJECTS *********/

/* 
6.
Loop through the object to list the animals and their habitats. 🐸🐮🦄

Your final output should be:
"the frog lives in a swamp, the cow lives in a field, the unicorn lives in a end of a rainbow" 🌈

*****
Bonus - build the sentence correctly:
"The frog lives in a swamp, the cow lives in a field, and the unicorn lives at the end of a rainbow." 
Hint: You can use conditionals inside your loop to achieve this.
*****
*/

const habitats = {
  frog: "swamp",
  cow: "field",
  unicorn: "end of a rainbow",
};

// Your code here

/* 
7. 
Let's go grocery shopping! 🛒
Use a for...in loop to sum the costs of all your groceries and get the total amount.

Check your work by printing: "The total grocery bill is X."
(Where X is the total cost of all groceries.)

*****
Bonus! Format your total costs like a price: "The total grocery bill is €X.00."
*****
*/

const groceries = {
  eggs: 2.5,
  bananas: 1.5,
  orangeJuice: 1.7,
  spinach: 1.6,
  peppers: 1.2,
  iceCream: 2.6,
};

// Your code here

/* 
8.
Below is an array of your classmates.

Now that we've learned loops, add (**hint: push) "loops" to everyone's coding knowledge!

You can console.log the object to check that it worked.

***** 
Bonus: console.log "My name is {your name}, and it's true that I have learned loops!"

(Ex. "My name is Zoe, and it's true that I have learned loops!") 🤓

Hint: The .includes() method might be useful. ;)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
***** 
*/
const classmates = {
  claudia: {
    livesIn: "Spain",
    codingKnowledge: ["variables", "objects", "arrays", "conditionals"],
  },
  emilia: {
    livesIn: "Spain",
    codingKnowledge: ["variables", "objects", "arrays", "conditionals"],
  },
  mara: {
    livesIn: "England",
    codingKnowledge: ["variables", "objects", "arrays", "conditionals"],
  },
  sarah: {
    livesIn: "Australia",
    codingKnowledge: ["variables", "objects", "arrays", "conditionals"],
  },
  victoria: {
    livesIn: "Czech Republic",
    codingKnowledge: ["variables", "objects", "arrays", "conditionals"],
  },
  zoe: {
    livesIn: "Spain",
    codingKnowledge: ["variables", "objects", "arrays", "conditionals"],
  },
};
