//? Given an array of string generate an array whose first or last character is a
//* Sample Input - ["assignment", "problem", "media", "upload"]
//todo Sample Output - ["assignment", "media"]

let array = ["assignment", "problem", "media", "upload"];
let odd=array.filter(el=>(el[0]=="a"||el[el.length-1]=="a"))

console.log(odd)