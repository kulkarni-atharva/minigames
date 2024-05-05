console.log("Hello")

var playerO = "O"
var playerX = "X"
var gameOver = false;
var currPlayer = playerX;
var board;
window.onload = function(){
    setGame();
}

function setGame(){
    board = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
    ]
    playerO = "O"
    playerX = "X"
    gameOver = false;
    currPlayer = playerX;

    // while(!gameOver)
        // Playgame();
}

document.getElementById("box11").onclick = function(){clicked("box11", currPlayer);};
    document.getElementById("box12").onclick = function(){clicked("box12", currPlayer);};
    document.getElementById("box13").onclick = function(){clicked("box13", currPlayer);};

    document.getElementById("box21").onclick = function(){clicked("box21", currPlayer);};
    document.getElementById("box22").onclick = function(){clicked("box22", currPlayer);};
    document.getElementById("box23").onclick = function(){clicked("box23", currPlayer);};

    document.getElementById("box31").onclick = function(){clicked("box31", currPlayer);};
    document.getElementById("box32").onclick = function(){clicked("box32", currPlayer);};
    document.getElementById("box33").onclick = function(){clicked("box33", currPlayer);};
function Playgame(){
    var j = 0;
    var mystring = "box";
    var newstring1="";
    var newstring2="";
    var newstring3="";

    for(var i = 0; i < 3; i++)
    {
        // for(var j = 0; j < 3; j++)
        // {
            if(board[i][j] == board[i][j + 1] && board[i][j + 1] == board[i][j + 2] && board[i][j] != ' ')
            {
                 newstring1 = mystring + (i+1).toString() + '1';
                 newstring2 = mystring + (i+1).toString() + '2';
                 newstring3 = mystring + (i+1).toString() + '3';
            }
            else if(board[0][i] == board[1][i] && board[1][i] == board[2][i] && board[0][i] != ' ')
            {
                 newstring1 = mystring + '1' + (i+1).toString();
                 newstring2 = mystring + '2' + (i+1).toString();
                 newstring3 = mystring + '3' + (i+1).toString();
            }
            else if(board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[2][2] != ' ')
            {
                 newstring1 = mystring + '1' + '1';
                 newstring2 = mystring + '2' + '2';
                 newstring3 = mystring + '3' + '3';
            }
            else if(board[2][0] == board[0][2] && board[0][2] == board[1][1] && board[0][2] != ' ') 
            {
                newstring1 = mystring + '1' + '3';
                 newstring2 = mystring + '2' + '2';
                 newstring3 = mystring + '3' + '1';
            }
        // }
    }
    // console.log(newstring1);
    if(newstring1 != "")
    {
        document.getElementById(newstring1).style.backgroundColor="lightGrey";
        document.getElementById(newstring1).style.color="red";

        document.getElementById(newstring2).style.backgroundColor="lightGrey";
        document.getElementById(newstring2).style.color="red";

        document.getElementById(newstring3).style.backgroundColor="lightGrey";
        document.getElementById(newstring3).style.color="red";

        gameOver = true;
    }
}

function clicked(box, player){
    if(board[parseInt(box[3]) - 1][parseInt(box[4]) - 1] == ' ' && !gameOver)
    {
        if(player == playerX)
            {
                document.getElementById(box).innerText="X"
                // document.getElementById(box).style.paddingTop="10px";
                document.getElementById(box).style.opacity="1"
                currPlayer = playerO;
                board[parseInt(box[3]) - 1][parseInt(box[4]) - 1] = 'X';
            }
            else{
                document.getElementById(box).innerText="O"
                document.getElementById(box).style.opacity="1"
                currPlayer = playerX;
                board[parseInt(box[3]) - 1][parseInt(box[4]) - 1] = 'O';
            }
            Playgame();
    }
}