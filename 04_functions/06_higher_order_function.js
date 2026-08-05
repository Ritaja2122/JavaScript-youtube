//hof -> wo function hota hai jo ki return kare function ya fir accept kare ek function apne parameter mein

function abcd(val){ // parameter mein function araha hai so its a hof

}
abcd(function(){

})

function xyz(){
    return abcd; //returning a func so xyz is a hof 
}
xyz();

//example1
function greet(){
    console.log("hi");
}
function execute(fn){ // execute is a hof cz its receiving a function as a parameter
    fn();
}
execute(greet); // here greet is callback cz a callback is the function that is passed as an argument

//example 2
function outer(){ // here outer returns the function inner so it is also an hof
    function inner(){
        console.log("hello")
    }
    return inner;
}
let x = outer();
x();
outer()()