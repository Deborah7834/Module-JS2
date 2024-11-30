// Predict and explain first...

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const value of Object.values(author)) {
  console.log(value);
}
/*

Object.values(author) returns an array of all the values in the author object: ["Zadie", "Smith", "writer", 40, true].
The for...of loop iterates over this array, logging each value*/
