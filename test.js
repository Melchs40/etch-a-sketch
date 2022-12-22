let userNumber = " ";

//removes grid from page
function removeGrid () {
    let container = document.getElementById("container");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

//creates grid on page and removes any prior grid
function createGrid (userNumber) {
    let container = document.getElementById("container");
    removeGrid();
    for (let i=0; i<(userNumber*userNumber); i++) {
    let square = document.createElement("div");
    square.className = "square";
    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    container.style.maxHeight = `${userNumber*30}px`;
    container.style.maxWidth = `${userNumber*30}px`;
    container.style.minHeight = `${userNumber*30}px`;
    container.style.minWidth = `${userNumber*30}px`;
    container.appendChild(square);
    }
}

//asks user to enter number to create grid
function askUser () {
    let response = prompt("Please enter a number between 1 and 100");
    if (response >1 && response<100) {
        createGrid(response);
    } else alert("Invalid number. Please try again.");
}

button.addEventListener("click", askUser);
