

const transactions = [
  [1,3,4300],
  [2,0,100],
  [3,1,200],
  [0,3,420]
];

function calculate(queue) {
  const bank = {};

  // Init bank
  queue.forEach((transaction,i) => {
    bank[transaction[0]] = 0;
    bank[transaction[1]] = 0;
  });

  // Calculate transactions
  queue.forEach((transaction, i) => {
    bank[transaction[0]] -= transaction[2]
    bank[transaction[1]] += transaction[2]
  });
    
  console.log(bank);
  return bank;
}

calculate(transactions);

// const arr = [2,4,6,8,35,49,924];
// const arr = [2,4,6];

// Finds random number from array
// console.log(Math.floor(Math.random() * arr.length))

// Prints out whole array, one index at a time, every one second until array is done
// const time = arr.length * 1000 + 1000;
// let count = 0;
// const yo = () => {
//   console.log('here - ', arr[count])
//   count++;
// };
// const hi = setInterval(yo, 1000);
// setTimeout(function() {
//   clearInterval(hi);
// }, time);

// Waits 2 seconds then prints out entire array, one at a time
// arr.forEach((val, i) => {
//   setTimeout(function (index) {
//     return function() {
//       console.log('index i ', arr[index]);
//     };
//   }(i), 2000);
// });