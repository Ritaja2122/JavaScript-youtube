function ans(choice1, choice2){
    if(choice1 == "rock"){
        if(choice2 == "rock"){
            console.log("draw")
        }
        if(choice2 == "scissor"){
            console.log("choice 1 wins")
        }
        if(choice2 == "paper"){
            console.log("choice 2 wins")
        }
    }
    else if(choice1 == "paper"){
        if(choice2 == "rock"){
            console.log("choice1 wins")
        }
        if(choice2 == "scissor"){
            console.log("choice2 wins")
        }
        if(choice2 == "paper"){
            console.log("draw")
        }
    }

    else if(choice1 == "scissor"){
        if(choice2 == "rock"){
            console.log("choice2 wins")
        }
        if(choice2 == "scissor"){
            console.log("draw")
        }
        if(choice2 == "paper"){
            console.log("choice1 wins")
        }
    }
}
ans("scissor","rock")