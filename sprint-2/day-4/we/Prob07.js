//? use the map() method to iterate over the array and join the values of firstName and lastName as follows

// Output should look like

// TODO ["Nrupul Dev", "Prateek Shukla", "Yogesh Bhat"]

let users = [
  { firstName: "Nrupul", lastName: "Dev", place: "Banglore" },
  { firstName: "Prateek", lastName: "Shukla", place: "Banglore" },
  { firstName: "Yogesh", lastName: "Bhat", place: "Kolkata" },
];

let res = users.map(el => el.firstName+" "+el.lastName)

console.log(res)