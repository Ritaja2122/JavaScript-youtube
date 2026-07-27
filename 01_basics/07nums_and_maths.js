const balance = new Number(100); //here we have explicitly decided the data type of the variable 
console.log(balance);

let str = balance.toString()
console.log(str)
console.log(typeof(str));

console.log(balance.toFixed(2))
//-------------------------------------------------------------------------------------------
const other = 24.4577
console.log(other.toPrecision(3));
//--------------------------------------------------------------------------------------------
const num = 100000000
console.log(num.toLocaleString('en-IN'));
// +++++++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math.abs(-9));
console.log(Math.round(9.8));
console.log(Math.min(2,3,4,5))
//*imp
console.log(Math.random());
console.log((Math.random()*10)+1); // ensures that the number is between 1 to 10

//what if we need the random number between a certain range
 const max =  20
 const min = 10
 console.log(Math.floor(Math.random()*(max-min+1))+min);
 

