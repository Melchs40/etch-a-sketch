let userNumber = " ";

function createGrid (userNumber) {
    for (let i=0; i<(userNumber*userNumber); i++) {
    let square = document.createElement("div");
    square.className = "square";
    

    document.getElementById("container").appendChild(square);
}
}

function askUser () {
    let response = prompt("please enter a number");
    createGrid(response);
}

button.addEventListener("click", askUser);

const squares = document.querySelectorAll("div.square");

squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "green";
    });
});