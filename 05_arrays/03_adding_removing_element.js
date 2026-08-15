// push() -> adds element in the end also returns the length of the new array
//pop() -> removes element from the end also returns the removed element
// unshift() - > adds element from the beginning also returns the length of the new array
// shift() -> removes element from the beginning also  returns the removed element
let nums = [1,2,3]
nums.push(4)
for(let num of nums){
    console.log(num);
    
}
nums.unshift(9)
for(let num of nums){
    console.log(num);
    
}
