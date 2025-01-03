let userscore = 0;
let compscore = 0;
const MS = document.getElementById("#message");

const getcomputer = () => {
    const option = ["rock", "paper", "scissors"];
    const randix = Math.floor(Math.random() * 3);
    return option[randix];
}

const playgame = (pop) => {
    console.log("user choice", pop);
    const harshad = getcomputer();
    console.log("computer choice", harshad);

    if (harshad === pop) {
        console.log("game is draw");
        document.getElementById("output").innerHTML = "match draw";
    }
    else if (pop == "paper" && harshad == "rock") {
        document.getElementById("output").innerHTML = " you win congratulation";
        console.log("user is win ");
    }
    else if (pop == "rock" && harshad == "paper") {
        document.getElementById("output").innerHTML = "you lose";
        console.log("computer is win ");
    }
    else if (pop == "paper" && harshad == "scissors") {
        document.getElementById("output").innerHTML = "you lose";
        console.log("computer is win ");
    }
    else if (pop == "scissors" && harshad == "paper") {
        document.getElementById("output").innerHTML = " you win congratulation";
        console.log("user is win ");
    }
    else if (pop == "rock" && harshad == "scissors") {
        document.getElementById("output").innerHTML = "you win congratulation";
        console.log("user  is win ");
    }
    else if (pop == "scissors" && harshad == "rock") {
        document.getElementById("output").innerHTML = "you lose";
        console.log("  computer  is win ");
    }

};

const choices = document.querySelectorAll(".choice");


choices.forEach((choice) => {
    console.log(choice);

    choice.addEventListener("click", () => {
        const pop = choice.getAttribute("id");
        console.log("choice was clicked", pop);
        playgame(pop);
    });
});