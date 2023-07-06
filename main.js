// COMPUTER CHOICE

function getComputerChoice(){
    let comp_selec=Math.floor(Math.random() * 3);                   //0==rock, 1==paper, 2==scissors
    if (comp_selec===0){
        comp_selec='rock'
        return comp_selec
    }
    else if (comp_selec===1){
        comp_selec='paper'
        return comp_selec
    }
    else if (comp_selec===2) {
        comp_selec='scissors'
        return comp_selec
    }
}


// PLAYER CHOICE


function getPlayerChoice(){
    let player_selec=prompt("Enter Your Choice : (rock, paper, scissors)")
    return player_selec
}


// MAIN GAME LOGIC

function playGame(playerSelection, computerSelection){

    if (playerSelection=='rock' && computerSelection=='scissors'){
        console.log("You Win! (Rock Beats Scissors!)")
        player_score+=1
    } 
    else if (playerSelection=='rock' && computerSelection=='paper'){
        console.log('Computer Wins! (Paper Beats Rock!)')
        comp_score+=1

    }
    else if (playerSelection=='scissors' && computerSelection=='rock'){
        console.log("Computer Wins! (Rock Beats Scissors)")
        comp_score+=1
    }
    else if (playerSelection='scissors' && computerSelection=='paper'){
        console.log('You Win! (Scissors Beats Paper!)')
        player_score+=1
    }
    else if (playerSelection='paper' && computerSelection=='rock'){
        console.log("You Win! (Paper Beats Rock!)")
        player_score+=1
    }
    else if (playerSelection=='paper' && computerSelection=='scissors'){
        console.log("Computer Wins! (Scissors Beat Paper)")
        comp_score+=1
    }
    else{
        console.log("Draw/Tie Game!")
        comp_score, player_score += 0
    }     
}

// ROUND-COUNT LOGIC

function round(){

    console.log("Round : 1")
    displayChoices()
    playGame(playerSelection,computerSelection)                         // round 1
    
    console.log("Round : 2")                                           // round 2
    getChoices()
    displayChoices()
    playGame(playerSelection,computerSelection)

    console.log("Round : 3")                                           // round 3
    getChoices()
    displayChoices()
    playGame(playerSelection,computerSelection)

    console.log("Round : 4")                                          // round 4
    getChoices()
    displayChoices()
    playGame(playerSelection,computerSelection)

    console.log("Round : 5")                                         // round 5
    getChoices()
    displayChoices()
    playGame(playerSelection,computerSelection)

    finalScores()
}

// GET BOTH CHOICES

function getChoices(){
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();
}

// DISPLAY CHOICES

function displayChoices(){
    console.log(`Player : ${playerSelection}`)
    console.log(`Computer : ${computerSelection}`)
}

// DISPLAY  and Calculate FINAL-SCORES

function finalScores(){
    console.log(`Player Score : ${player_score}`)
    console.log(`Computer Score : ${comp_score}`)
    if (player_score>comp_score){
        console.log("Player Wins!")
    }else{
        console.log("Computer Wins!")
    }
}

// DECLARATIONS

let comp_score=0;
let player_score=0;
let computerSelection = getComputerChoice();
let playerSelection = getPlayerChoice();

// INVOKE
round()
