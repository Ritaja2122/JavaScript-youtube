// here we can pass function as parameters
function greet(){
    console.log("hello");
}
function execute(fn){
    fn();
}
execute(greet);

//explaination :  here the func greet is passed to the func execute so now fn and greet both points to the same memory...so if execute func is executed it will do whatever is written inside the func greet

// example
function calculator(a,b,operation){
    operation(a,b);
}
function add(a,b){
    console.log(a+b);
}
function subtract(a,b){
    console.log(a-b);
}
function multiply(a,b){
    console.log(a*b);
}
calculator(2,3,add);
calculator(2,3,subtract);
calculator(2,3,multiply);
