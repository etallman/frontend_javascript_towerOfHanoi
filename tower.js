let tower = document.getElementsByClassName("tower")
let towerLeftDiv = document.getElementById("towerLeft");
let towerMiddleDiv = document.getElementById("towerMiddle");
let towerRightDiv = document.getElementById("towerRight");

let tower1
let tower2
let currentDisc
let selected = false;


//Tower Click Functions//
towerLeftDiv.onclick = function () {
    clicked(event);
}

towerMiddleDiv.onclick = function () {
    clicked(event);
}

towerRightDiv.onclick = function () {
    clicked(event);
    const count = towerRight.childElementCount;
    if (count == 4) {
        alert("YOU WIN!!")
    }
}


function clicked(event) {

    if (selected) {
        tower2 = event.currentTarget;
        moveDisc()

    } else {
        tower1 = event.currentTarget;
        currentDisc = tower1.lastElementChild
        tower1.removeChild(tower1.lastElementChild)
    }
    selected = !selected
}

function moveDisc() {
    if (tower2.childElementCount > 0) {
        if (currentDisc.id.slice(1) < tower2.lastElementChild.id.slice(1)) {
            tower2.appendChild(currentDisc)
        } else {
            tower1.appendChild(currentDisc)
        }
    } else {
        tower2.appendChild(currentDisc)
    }
}