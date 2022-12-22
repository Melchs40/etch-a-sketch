let userNumber = " ";

function createGrid (userNumber) {
    for (let i=0; i<(userNumber*userNumber); i++) {
    let square = document.createElement("div");
    square.className = "square";
    document.getElementById("container").style.display = "flex";
    document.getElementById("container").style.flexWrap = "wrap";
    document.getElementById("container").style.maxHeight = `${userNumber*30}px`;
    document.getElementById("container").style.maxWidth = `${userNumber*30}px`;
    document.getElementById("container").style.minHeight = `${userNumber*30}px`;
    document.getElementById("container").style.minWidth = `${userNumber*30}px`;
    document.getElementById("container").appendChild(square);
    }
}

function askUser () {
    let response = prompt("please enter a number");
    createGrid(response);
}

button.addEventListener("click", askUser);
