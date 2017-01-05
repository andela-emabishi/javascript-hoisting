// Let block scoping
// In the case below, myVariable is


function sum(a,b) {
  // myVariable is not defined
  // console.log(myVariable);
  // Output ====> ReferenceError: myVariable is not defined
  if (typeof(a) && typeof(b) === 'number') {
    // myVariable is also not defined here
    // console.log(myVariable);
    // Output ====> ReferenceError: myVariable is not defined
    let myVariable = 3;
    console.log(myVariable);
      return (a + b)
  }
  else {
    return NaN
  }

}

console.log(sum(10,20));
console.log(sum(10,'a'));
