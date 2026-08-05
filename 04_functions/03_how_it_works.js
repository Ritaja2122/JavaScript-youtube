// default parameters
function add(v1 = 0, v2 = 4){
    console.log(v1+v2)
}
add(2,4);
add(); //here the default values will be taken into account bcz arguments are not provided

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//rest AND spread
function abcd(...val){
 console.log(val);
}
abcd(1,2,3,4,5,6,7,8,9,10);

// jab arguments kai sare ho hame utne hi parameters bhi banane parenge....isse bachne ke liye ham "REST" ka use karte hai which is "..." 
//agar "..." function ke parameter space me lage to wo hain rest and agar wo arrays and objects me lage to wo spread operator hai