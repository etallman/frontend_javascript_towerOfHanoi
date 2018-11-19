const gameBoardDiv = 


function selection() {

    towerLeftDiv.addEventListener('click', function () {
        console.log("Are you sure you can defeat me with Roncor?")
        gamePlay("Roncor")
    });

    towerMiddleDiv.addEventListener('click', function () {
        console.log("Are you sure you can defeat me with Printlor?")
        gamePlay("Printlor")
    });

    towerRightDiv.addEventListener('click', function () {
        console.log("Are you sure you can defeat me with Stan?")
        gamePlay("Stan")
    });

}