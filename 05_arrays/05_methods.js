// 1) map() = it is specifically a non mutating array method in normal use- it creates a new array rather than changing the original

let nums  = [2,3,4,5,6];
//suppose we want to double every number
//so map transform every element and create a new array
//SYNTAX 
// array.map(function(element){
// return transformedValue;});

let doubled = nums.map(function(num){
    return num*2;
});
console.log(doubled);
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//2) filer() -> it checks every element against a condition
// if the condition is true -> element gets into the new array
// if false -> element is left out
//BASIC SYNTAX
//array.filter(function(num){
//return condition;});

let nums2 = [1,2,3,4,5,6,7,8]
let result = nums2.filter(function(num){
    return num>3;
});
console.log(result);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//reduce() -> one final result
let nums3 = [10,20,30,40]
//suppose we want to add everything
//example
let sum = nums3.reduce(function(total,num){ //first parameter is accumulator and second is current value
    return total + num;
},0);
// 0 is the initial value of the accumulator
//whatever we return becomes the accumulator for the next iteration
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//3)arr.sort() -> sorts array in lexographical order

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//4) reverse() -> reverses the order of element in an array , it changes the original array
let num4 = [1,2,3,4]
num4.reverse();
console.log(num4)
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=

//5) join() -> it is  used when we want to combine all elements of an array into one string
let fruits = ["pear", "apple", "guava"];
let result1 = fruits.join("-");
console.log(result1)

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//6) concat() -> it is used to combine array,  it doesnt modify the original array
let arr1 = [1,2,3]
let arr2 = [4,5,6]
let result3 = arr1.concat(arr2);
console.log(result3)
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 7) flat() -> it is used when an array contains nested arrays and u want to bring the elements out to a flatter level and it returns a new array
let arr7 = [1,2,[3,4],5]
let result7 = arr7.flat()
console.log(result7)
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 //8) some() -> is used to check whether at least one element in an array satisfies a condition..it returns boolean
 let arr8 = [2,5,8,7]
 let result8 = arr8.some(function(num){
    return num>5;
 })
 console.log(result8)

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//9) every() -> it checks whether every single element satisfies a condition
let arr9 = [1,2,3,4,5,6,7,8,10]
let result9 = arr9.every(function(num){
   return num%2===0
    
})
console.log(result9)
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//10)Array.from() -> is a way to create an array from something else(and optionally transform while doing so)
 let name = "momo"
 let letters = Array.from(name);
 console.log(letters)
 //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 //11) Array.isArray() -> it answers the question is this actually an array
 let arr11 = [1,2,3]
 console.log(Array.isArray(arr11));

