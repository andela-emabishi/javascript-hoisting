const x = 20;
// x = 50;
// const x = 30;
console.log(x);

// Output: Assignment to constant variable
// Prevents you from re-assigning the variable x

function divideByHundred(b) {
  // console.log(a);
  // Output => ReferenceError: a is not defined
  const a = 100;
  if (typeof(b) === 'number') {
    // The constant a can be overridden here
    const a = 10;
    console.log(a);
    return (a/b)
  }

}

console.log(divideByHundred(90));
