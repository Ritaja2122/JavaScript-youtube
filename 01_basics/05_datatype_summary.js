// PRIMITIVE -> they are call by value

// 7 TYPES : String, Number, Boolean, Null, undefined, Symbol, BigInt

//Reference type or Non-Primitive: call by reference
// Array, Objects, Functions

// JavaScript is a dynamically typed language
const id = Symbol("123")
const id2 = Symbol("123")
console.log(id===id2) //both are diff

const heros = ["ironman", "spiderman"] //array

let myObj = {         //object
    name: "momo",
    age : 22,

}

const myFunction = function(){ // object function
    console.log("momo");
    
}

/*******************************************************************************************/
//Stack(Primitive), Heap(Non-Primitive)
 