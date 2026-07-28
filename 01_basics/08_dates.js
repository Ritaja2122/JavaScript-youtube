let myDate = new Date()
console.log(myDate)
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());


let myCreatedDate = new Date(2023,0,8) //month  starts from 0 ...0 denotes january
console.log(myCreatedDate.toDateString());

//----------------------------------------------------------------------------------------

let myTimeStamp = Date.now() // works as a stop watch and returns in miliseconds
console.log(myTimeStamp)

//how to convert it into seconds

console.log(Math.floor(Date.now()/1000));