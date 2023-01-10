
function createChoice(name){
    let beats = "";
    switch(name){
        case "Rock":
            beats = "Scissors";
            break;
        case "Paper":
            beats = "Rock";
            break;
        case "Scissors":
            beats = "Paper";
            break;
    }
    return {choice:name,advantage:beats}
}

function playerChoice(){
    let vals = prompt("Rock / Paper / Scissors")
    return createChoice(vals)
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
    return createChoice(val2);
}

function result(playerChoice,aiChoice){
    if(playerChoice.advantage==aiChoice.choice){
        return "Player wins";
    }
    else if(aiChoice.advantage==playerChoice.choice){
        return "AI wins";
    }
    else{
        return "Draw"
    }
}

function updateElement(id="", val=""){
    let element = document.getElementById(id);
    element.innerHTML = val
}

for(i = 0; i <5; i++){

    let pChoiceId = "pChoice";
    let aiChoiceID = "aiChoice";
    let resultID = "result";

    let player = playerChoice();
    let ai  = aiChoice();
    let winner = result(player,ai);

    updateElement(pChoiceId,player.choice)
    updateElement(aiChoiceID,ai.choice)
    updateElement(resultID,winner)

    console.log(winner)
}