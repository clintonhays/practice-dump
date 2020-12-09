// const isAdult = (age) => {
//   return age && age >= 18;
// };

const countToFive = (start) => {
  start = start || 1;
  for (let i = start; i <= 5; i++) {
    console.log(i);
  }
};

// countToFive(0);

const greet = (name) => {
  name && console.log(`Hi, ${name}!`);
};

greet('Clinton');
