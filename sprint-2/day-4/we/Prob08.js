//? use filter along with map() method to iterate over the array and output the names who lives in Banglore Output should look like

// TODO ["Nrupul Dev", "Prateek Shukla"]

let users = [
  { firstName: "Nrupul", lastName: "Dev", place: "Banglore" },
  { firstName: "Prateek", lastName: "Shukla", place: "Banglore" },
  { firstName: "Yogesh", lastName: "Bhat", place: "Kolkata" },
];

let res = users
  .filter(el => el.place == "Banglore")
  .map(el => el.firstName + " " + el.lastName)

console.log(res)