console.log(a)
var a = 2
//even though i have printed a before declaring and initializing it...the output doesnt show error instead it shows that the value of a is undefined . This happens becoz of HOISTING. 
// the concept of hoisting tells that when u declare and initialize a var then internally it breaks into two part first declaration happens like  "var a = undefined" which is moved to the topmost part and then it is initialized later. That is why it doesnt show error cz it is already declared at topmost position.