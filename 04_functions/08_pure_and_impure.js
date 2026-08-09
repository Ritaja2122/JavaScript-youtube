//PURE function follows two rules ->
//1) if we give the same input then the output will be same everytime
//example
function add(a,b){
    return a+b;
}
console.log(add(2,3)) //5
console.log(add(2,3)) //5
console.log(add(2,3)) //5

//2) It doesnt affect anything outside itself -> for eg it doesnt modify a global variable, change an array outside itself etc

//IMPURE functions are functions which break these rules
//example
let count = 0
function increment(){
    count++;
}
increment(); // count = 1
console.log(count) 
increment(); //count = 2
console.log(count)
increment(); //count = 3
console.log(count)

// in the above function everytime we call the function the variable count is changing so its breaking the first rule thus its an impure function

//SOME IMPORTANT EXAMPLES
let x = 10
function change(){
    return x;
}
//above is an impure function cz it depends on outer value if x changes then the return value of the function changes 

function greet(name){
    console.log("hello " + name)
}
greet("ritaja")

//the above function is impure function cz the console.log() is a side effect, its interacting with the outer environment by writing to the console thus breaking the second rule.
