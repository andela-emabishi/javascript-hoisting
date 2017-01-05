// Function declarations

// Let does not allow usage before initialisation/Assignment
function subtract(a,b) {
  console.log(aVariable); // We get error ReferenceError: aVariable is not defined
  let aVariable = 30;
  // console.log(aVariable); // No error The value aVariable is logged as 30
  return a - b;
};

console.log(subtract(10,20));

// With var, only the declaration of the variable is hoisted to the top of the function. The assignment is not.
// Hence no error is thrown, but the value of a Variable becomes undefined

/*
function subtract(a,b) {
// The declaration of a Variable is hoisted to the top of the function, here, before the log statement like this var aVariable;
  console.log(aVariable); // Value of aVariable becomes undefined
  var aVariable = 30; //If we assign the variable aVariable to 30
  // console.log(aVariable); // No error The value aVariable is logged as 30.

  return a - b;
};
console.log(subtract(10,20));
*/
