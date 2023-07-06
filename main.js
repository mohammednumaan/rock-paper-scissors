function getComputerChoice(){
    comp_selec=Math.floor(Math.random() * 3);  //0==rock, 1==paper, 2==scissors
    if (comp_selec==0){
        comp_selec='rock'
        return comp_selec
    } else if (comp_selec==1){
        comp_selec='paper'
        return comp_selec
    }else if (comp_selec==2){
        comp_selec='scissors'
        return comp_selec
    }
}

function getPlayerChoice(){
    player_selec=prompt("Enter Your Choice : (rock, paper, scissors)")
    return player_selec

}

function playGame(playerSelection, computerSelection){

    if (playerSelection=='rock' && computerSelection=='scissors'){
        console.log("You Win! (Rock Beats Scissors!)")
    } 
    else if (playerSelection=='rock' && computerSelection=='paper'){
        console.log('Computer Wins! (Paper Beats Rock!)')

    }
    else if (playerSelection=='scissors' && computerSelection=='rock'){
        console.log("Computer Wins! (Rock Beats Scissors)")
    }
    else if (playerSelection='scissors' && computerSelection=='paper'){
        console.log('You Win! (Scissors Beats Paper!)')
    }
    else if (playerSelection='paper' && computerSelection=='rock'){
        console.log("You Win! (Paper Beats Rock!)")
    }
    else if (playerSelection=='paper' && computerSelection=='scissors'){
        console.log("Computer Wins! (Scissors Beat Paper)")
    }
    else{
        console.log("Draw/Tie Game!")
    }
        
}

const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();

console.log(`Player : ${playerSelection}`)
console.log(`Computer : ${computerSelection}`)
console.log(playGame(playerSelection, computerSelection))
