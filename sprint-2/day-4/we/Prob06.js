//* Given an array of numbers find the sum of cubes if the number is divisible by 3 Sample Input - [1, 2, 3, 4, 5, 6] Sample Output - 243 (27+216)

let arr = [1, 2, 3, 4, 5, 6]

var res = arr
  .filter(el => el%3==0)
  .map(el => el**3)
  .reduce((acc,el) => acc+el)

console.log(res)