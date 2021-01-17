// 1. Write a JavaScript function to check whether an `input` is an array or not.
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// true

// 1. SOLUTION
// const checkArray = (input) => Array.isArray(input);
// console.log(checkArray("w3resource"));
// console.log(checkArray([1, 2, 3, 4, 0]));

// 2. Write a JavaScript function to clone an array.
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]

// 2. SOLUTION
// const cloneArray = (arr) => Array.from(arr);
// console.log(cloneArray([1, 2, 3, 4]));
// console.log(cloneArray([1, 2, [3, 4]]));

// 3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []

// 3. SOLUTION*
// const getFirst = (arr, n = 0) => {
//   if (n === 0) {
//     return arr[0];
//   }
//   if (n < 0) {
//     return [];
//   }
//   return arr.slice(0, n);
// };

// console.log(getFirst([7, 9, 0, -2]));
// console.log(getFirst([], 3));
// console.log(getFirst([7, 9, 0, -2], 3));
// console.log(getFirst([7, 9, 0, -2], 6));
// console.log(getFirst([7, 9, 0, -2], -3));

// 4. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.
// Test Data :
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));
// Expected Output :
// -2
// [9, 0, -2]
// [7, 9, 0, -2]

// 4. SOLUTION
// const getLast = (arr, n) => {
//   if (n == null) {
//     return arr.slice(arr.length - 1);
//   }
//   if (n > arr.length) {
//     return arr;
//   }
//   return arr.slice(arr.length - n);
// };
// console.log(getLast([7, 9, 0, -2]));

// 5. Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"

// 5. SOLUTION
// const joinArr = (arr, str) => {
//   return arr.join(str);
// };
// console.log(joinArr(["Red", "Green", "White", "Black"], "-"));

// 6. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.

// 6. SOLUTION*

const evenDash = (number) => {
  const result = [];
  const str = number.toString();
  const arr = Array.from(str);

  arr.forEach((num, index) => {
    if (num % 2 === 0 && num[index + 1] % 2 === 0) {
      console.log(num);
      // result.push(num);
    }
  });
};
