console.log("hello")

window.addEventListener("load", main);

let character: HTMLElement | null;

let position = { bottom: 0, left: 0 }

function main() {
    character = document.querySelector(".character");
    addEventListeners();

    runGameLoop();
}

function addEventListeners() {
    window.addEventListener("keydown", handleUserInput);
}

function handleUserInput(event: KeyboardEvent) {
    switch(event.key) {
        case "ArrowLeft":
            position.left -= 1;
            break;

        case "ArrowRight":
            position.left += 1;
            break;

        case " ":
            position.bottom += 10;
            break;
    }
}

function renderCharacter() {
    if (character) {
        character.style.bottom = position.bottom + "%";
        character.style.left = position.left + "%"
    }
}


function runGameLoop() {
    setInterval(function() {
        applyGravity();

        if(position.bottom < 0) {
            position.bottom = 0;
        }
        renderCharacter();
    }, 100);
}

function applyGravity() {
    position.bottom -= 1;
}