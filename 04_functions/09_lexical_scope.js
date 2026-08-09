//SCOPE = scope is where a variable can be accessed
let x = "Global"
function outer(){
    let x = "outer";
    function inner(){
        console.log(x)
    }
    inner();}

outer();
//it prints outer cz it finds x = "outer" first in its lexical environment and thus never reaches global....the searching process is called scope chain