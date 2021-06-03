/* && a type of logical operators, it test whether something is TRUE or FLASE, use the && or || operators,
&& ampersand symbol means that all conditions have to be TRUE */

console.log(true && false); //false
console.log(false&&true); //false
console.log(true&&true); //true only when both side are true
console.log(false&&false); //false
console.log((5>1) && (3>1)); //true
console.log((1>5) && (3>1)); //false

/*  if we have three conditions, even if one of then is false, the whole result will be false, both conditions have to be true for the output to be true */