//indexOf() -> tells you where a particular  value is located
let nums = [1,2,3,4,5]
console.log(nums.indexOf(5))

//includes() -> tells u whether the value exists
console.log(nums.includes(90))

//find() -> uses the callback concept and  returns the first matching element if nthing matches we get undefined
let arr = [10,25,7,60,15]
//we want the first number greater than 20
let result = arr.find(num => num>20)
console.log(result)


//findIndex() -> exactly the same searching process  but instead of returning element , it return its index
 let arr2 =  [10,25,7,80,90]
 let result2 = arr2.findIndex(num => num%2==0)
 console.log(result2)

