//? Given an array of strings print the sum of lengths if the characters in the string are odd
//* Sample Input - ["A", "Good", "Problem"]
//todo Sample Output - 8

let arr = ["A", "Good", "Problem"]

var res = arr
  .filter(el => el.length%2==1)
  .reduce((acc,el) => acc.length+el.length)

console.log(res)