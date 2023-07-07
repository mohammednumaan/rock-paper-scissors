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
    else{
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

    if (playerSelection=='rock' && computerSelection=='scissors' || playerSelection=='paper' && computerSelection=='rock' || playerSelection=='scissors' && computerSelection=='paper'){
        console.log("You Win!")
        player_score+=1
    } 

    else if ( playerSelection===computerSelection){
        console.log("Draw/Tie Game!")
        comp_score, player_score += 0
    }
    
    else{
        console.log("Computer Wins!")
        comp_score +=1
    }     
}

// ROUND-COUNT LOGIC

function round(){
    for(i=1;i<=5;i++){
        console.log(`Round : ${i}`)
        getChoices()
        displayChoices()
        playGame(playerSelection,computerSelection);
        (i === 5) ? finalScores() : ""
    }
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
        console.log("Player Wins The Entire Game!")
    }
    else if(comp_score>player_score){
        console.log("Computer Wins The Entire Game!")
    }
    else{
        console.log("Tie Game!")
    }
}

// DECLARATIONS

let comp_score=0;
let player_score=0;
let computerSelection = getComputerChoice();
let playerSelection = getPlayerChoice();

// INVOKE
round()
