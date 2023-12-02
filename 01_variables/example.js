// Variable redeclaring using var
var x = 10;
// Here x is 10
console.log(x);

{
var x = 2;
// Here x is 2
console.log(x);
}

// Here x is 2
console.log(x);

// -----------------------------------------------------------------------------------------------
// Redeclaring a variable inside a block will not redeclare the variable outside the block:
let A = 10;
// Here x is 10
console.log(A);

{
let A = 2;
// Here A is 2
console.log(A);
}

// Here A is 10
console.log(A);