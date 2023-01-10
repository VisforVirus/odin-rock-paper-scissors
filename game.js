
function playerChoice(){
    return prompt("Rock / Paper / Scissors")
}

function aiChoice(){
    val = parseInt(Math.floor(Math.random()*3));
    val2 = "";
    switch(val){
        case 0:
            val2 = "Rock";
            break;
        case 1:
            val2 = "Paper";
            break;
        case 2:
            val2 = "Scissors";
            break;
    }
    return val2;
}

function result(playerChoice="",aiChoice=""){
    return 0;
}

function updateElement(id="", val=""){
    let element = document.getElementById(id);
    element.innerHTML = val
}

let pChoiceId = "pChoice";
let aiChoiceID = "aiChoice";
let resultID = "r";

let player = playerChoice();
let ai  = aiChoice();
let winner = result(1,1);

updateElement(pChoiceId,player)
updateElement(aiChoiceID,ai)