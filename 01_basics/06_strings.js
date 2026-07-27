const name = "ritaja"
const repocount = 3
//console.log(name + repocount + "value"); outdated way to concatenate strings

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const game = new String('ritman')
console.log(game[0]);
console.log(name[0]);
console.log(game.__proto__); // not needed to write everytime ..it just provides the diff  methods 
console.log(name.length)
console.log(name.charAt(5))
console.log(name.indexOf('t'))
//----------------------------------------------------------------------------------------------

const newString = game.substring(0,4) // 0 index theke 3 index porjonto substring form kore
console.log(newString)
//--------------------------------------------------------------------------------------------

const string_2 = "ritajamandal"
let sliced = string_2.slice(1,3) // prints it
console.log(sliced)
sliced = string_2.slice(2) //prints starting from index 2 to end
console.log(sliced)
sliced = string_2.slice(-5,-1) // negative indexing starts from end of the string with -1 .
console.log(sliced)

///-------------------------------------------------------------------------------------------------

console.log(string_2.replace('rit','roy'))

//----------------------------------------------------------------------------------------------