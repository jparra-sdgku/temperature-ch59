let possitionLeft = 350;

let character = document.getElementById ("character");

function moveLeft() {
    if (possitionLeft > 0) {
        character.style.left = possitionLeft + "px";
        possitionLeft =possitionLeft -5
    }
}

function moveRight() {
    //setInterval() automatic movement.
}