let boxes = document.querySelectorAll(".box");
let restart = document.querySelector(".restartGame");
let gameWinner = document.querySelector(".gameWinner p");
let playerX = 'X';
let playerO = 'O';
let nextTurn = false; 
let winnerPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

let playerXindex = [];
let playerOindex = [];

function cheackWinner(array) {
    return winnerPattern.some(pattern => 
        pattern.every(index => array.includes(index))
    );
}

function XAndO() {
    boxes.forEach((box, index) => {
        box.addEventListener("click", function(){
            if(box.innerHTML !== '') return;
            if(!nextTurn){
                box.innerHTML = playerX;
                box.classList.add("player-X")
                box.style.backgroundColor = "#7fffd4";
                playerXindex.push(index);
                if(cheackWinner(playerXindex)){
                    gameWinner.textContent = "Player X Wins !!!";
                    gameWinner.style.color = "#7fffd4";
                    disableAllBoxes();
                    return;
                }
            } 
            else{
                box.innerHTML = playerO;
                box.classList.add("player-O")
                box.style.backgroundColor = "#ff83f1";
                playerOindex.push(index);
                if(cheackWinner(playerOindex)){
                    gameWinner.textContent = "Player O Wins !!!";
                    gameWinner.style.color = "#ff83f1";
                    disableAllBoxes();
                    return;
                }
            };
            if(playerXindex.length + playerOindex.length === 9){
                gameWinner.textContent = "Draw Try Again !!!";
                gameWinner.style.color = "red";
                disableAllBoxes();
                return;
            };
            nextTurn = !nextTurn;
        });
    });
}

function disableAllBoxes(){
    boxes.forEach(box => {
        box.style.pointerEvents = "none";
    });
}

function newGame(){
    restart.addEventListener("click", function() {
        location.reload();
    });
}

XAndO();
newGame();