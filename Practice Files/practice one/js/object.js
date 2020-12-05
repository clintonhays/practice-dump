/* INSTRUCTIONS
To run this file, click in the Console below and type: node 1_object.js 
If your program is stuck in an infinite loop, you can break out of the program by typing ctrl + C.
*/

// 1. Create an object named book using object literal syntax
const book = {
  title        : 'Fantastic Mr Fox',
  author       : 'Roald Dahl',
  publish_year : 1970,
};
// 2. Add a title property to the book object and assign it a string value
// 3. Add an author property to the book object and assign it a string value
// 4. Add a publish_year to the book object and assign it a number to represent the year the book was published

/* 5. Use a for-in loop to print the book object to the console so the final output looks something like this:
title: Harry Potter and the Sorcerer's Stone
author: J.K. Rowling
publish_year: 1997
*/

for (const key in book) {
  if (book.hasOwnProperty(key)) {
    console.log(`${key}: ${book[key]}`);
  }
}

// 6. Run your code by typing node object.js in the console below
