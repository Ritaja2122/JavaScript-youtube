function outer(){
    let x = 10;
    function inner(){
        console.log(x);
    }
    return inner;}


let myfunction = outer();
myfunction();

//output is 10 that means myfunction has still access to the outer function even after outer function is finished and its local variable x should be gone....so here the concept of closure comes into play
