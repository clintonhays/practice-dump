/* INSTRUCTIONS
To run this file, click in the Console below and type: node 3_final_products.js 
If your program is stuck in an infinite loop, you can break out of the program by typing ctrl + C.
*/

// 1. Create an array named products.
// 2. Add objects to the array. Each object should be a single product, with the following 3 properties.
// Make up the values for the properties, just make sure the inventory is a whole number (it's the number of that product currently in stock) and unit_price is a floating point number like 45.99
// -- name
// -- inventory
// -- unit_price

const products = [
  {
    name       : 'notebook',
    inventory  : 10,
    unit_price : 10.99,
  },
  {
    name       : 'pen',
    inventory  : 250,
    unit_price : 3.99,
  },
  {
    name       : 'eraser',
    inventory  : 110,
    unit_price : 0.99,
  },
  {
    name       : 'pencil',
    inventory  : 300,
    unit_price : 1.99,
  },
];

// 3. Create a function named listProducts(). The function should accept 1 parameter -- the array of products. It should return an array of just the names of the products.

const listProducts = (arr) => {
  const prodNames = [];
  arr.forEach((product) => {
    prodNames.push(product.name);
  });
  return prodNames;
};

// 4. Call the listProducts() function and log the returned value to the console.

console.log(listProducts(products));

// 5. Create a function named totalValue(). The function should accept 1 parameter -- the array of products. It should return the total value of all of the products in the array. You calculate the value of one product by multiplying the inventory value by the unit_price value

const totalValue = (arr) => {
  let total = 0;
  arr.forEach((product) => {
    total += Math.floor(product.inventory * product.unit_price);
  });
  return total.toFixed(2);
};

// 6. Call the totalValue() function and log the returned value to the console.

console.log(totalValue(products));

// 7. Run your code by typing node final_products.js in the console below
