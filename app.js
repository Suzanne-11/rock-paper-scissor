//Caching the DOM

let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getCompChoice(){
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random()*3); //will create a rondom number between 0 and 3 i.e 0,1,2
    return choices[randomNumber]; //choices[0], choices[1],etc
}

function convertToWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    else return "Scissors";
}

function win(user_Choice, comp_Choice){
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallCompWord = "comp".fontsize(3).sub();
    const smallUserWord = "user".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(user_Choice)}${smallUserWord} beats ${convertToWord(comp_Choice)}${smallCompWord} . You win:)`;  //ES6
    document.getElementById(user_Choice).classList.add('green-glow');
    setTimeout(function(){document.getElementById(user_Choice).classList.remove('green-glow')},300); //setTimeout(function,time in ms)
}

function lose(user_Choice, comp_Choice){
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallCompWord = "comp".fontsize(3).sub();
    const smallUserWord = "user".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(user_Choice)}${smallUserWord} lost to ${convertToWord(comp_Choice)}${smallCompWord} . You lose:(`;  //ES6
    document.getElementById(user_Choice).classList.add('red-glow');
    setTimeout(function(){document.getElementById(user_Choice).classList.remove('red-glow')},300);
}

function draw(user_Choice, comp_Choice){
    const smallCompWord = "comp".fontsize(3).sub();
    const smallUserWord = "user".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(user_Choice)}${smallUserWord} and ${convertToWord(comp_Choice)}${smallCompWord} . It's a Draw!!!`;  //ES6
    document.getElementById(user_Choice).classList.add('gray-glow');
    setTimeout(function(){document.getElementById(user_Choice).classList.remove('gray-glow')},300);
    
}

function game(userChoice){
    const compChoice = getCompChoice();
    switch(userChoice + compChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, compChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, compChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, compChoice);
            break;
    }
}

function main(){
    rock_div.addEventListener('click', function(){
        game("r");
    })
    
    paper_div.addEventListener('click', function(){
        game("p");
    })
    
    scissors_div.addEventListener('click', function(){
        game("s");
    })
}

main();


