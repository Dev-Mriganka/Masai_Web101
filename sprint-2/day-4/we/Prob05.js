//! Given an array of numbers find the sum of odd elements Sample Input - [1, 2, 3, 4] Sample Output - 4

let arr = [1, 2, 3, 4]

var res = arr
  .filter(el => el%2==1)
  .reduce((acc,el) => acc+el)

console.log(res)