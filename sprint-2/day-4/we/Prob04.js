//! Given an array of numbers print the product of all numbers

// Sample Input - [2,3,4] Sample Output - 24

let array = [2, 3, 4];
let product=array.reduce((ac,el)=>(ac*el))

console.log(product)