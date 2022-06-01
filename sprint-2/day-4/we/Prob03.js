//! Given an array of numbers extract the numbers which are odd

// Sample Input - [1,2,3] Sample Output - [1,3]

let array = [10, 16, 17, 18, 20];
let odd=array.filter(el=>(el%2==1))

console.log(odd)