console.log("Hello")

var playerO = "O"
var playerX = "X"
var gameOver = false;
var currPlayer = playerX;
var board;
var computer = false;
var twoPlayer = true;
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

document.getElementsByClassName("footer")[0].style.color="red";
// document.getElementsByClassName("twoPlayer")[0].onmouseover = function() { 
//     console.log("change color");
//     document.getElementsByClassName("twoPlayer")[0].style.backgroundColor = "white";
//     document.getElementsByClassName("twoPlayer")[0].style.color = "black";
//  };

//  document.getElementsByClassName("twoPlayer")[0].onmouseout = function() { 
//     console.log("change color");
//     document.getElementsByClassName("twoPlayer")[0].style.backgroundColor = "orangered";
//     document.getElementsByClassName("twoPlayer")[0].style.color = "white";
//  };

 document.getElementsByClassName("twoPlayer")[0].onclick = function() { 
    // console.log("change color by click");
    document.getElementsByClassName("twoPlayer")[0].style.backgroundColor = "orange";
    document.getElementsByClassName("twoPlayer")[0].style.color = "black";

    document.getElementsByClassName("computer")[0].style.backgroundColor = "orangered";
    document.getElementsByClassName("computer")[0].style.color = "white";

    twoPlayer = true;
    computer = false;
 };

 document.getElementsByClassName("computer")[0].onclick = function() { 
    // console.log("change color by click");
    document.getElementsByClassName("computer")[0].style.backgroundColor = "orange";
    document.getElementsByClassName("computer")[0].style.color = "black";

    document.getElementsByClassName("twoPlayer")[0].style.backgroundColor = "orangered";
    document.getElementsByClassName("twoPlayer")[0].style.color = "white";

    twoPlayer = false;
    computer = true;
 };

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
        
        if(document.getElementsByClassName("footer")[0].style.color == "black")
            {
                document.getElementsByClassName("footer")[0].style.color = "red";
                document.getElementsByClassName("footer")[1].style.color = "black";
            }
        else
            {
                document.getElementsByClassName("footer")[0].style.color = "black";
                document.getElementsByClassName("footer")[1].style.color = "red";
            }
    }
}
var i;
var j;

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
                // document.getElementsByClassName("footer")[0].innerText="PlayerO";
                document.getElementsByClassName("footer")[0].style.color="black";
                document.getElementsByClassName("footer")[1].style.color="red";

                document.getElementsByClassName("footer")[0].innerText="Player1";
                document.getElementsByClassName("footer")[1].innerText="Player2";

                if(computer == true)
                {
                    let BestMove;
                    let BestScore = -Infinity;
                    // let tempBoard = board;
                    // console.log(tempBoard)
                    for(let i = 0; i < 3; i++)
                    {
                        for(let j = 0; j < 3; j++)
                            {
                                if(board[i][j] == ' ')
                                {
                                    board[i][j] = 'O';
                                    let score = minimax(board, 0, false);
                                    board[i][j] = ' '
                                    if(score > BestScore)
                                    {
                                        BestScore = score;
                                        BestMove = [i, j];
                                    }
                                }
                            }
                    }
                    let mystr = "box"
                    let newstr = mystr + (BestMove[0]+1).toString() + (BestMove[1]+1).toString();
                    console.log(newstr);
                    document.getElementById(newstr).innerText="O"
                    document.getElementById(newstr).style.opacity="1"
                    board[BestMove[0]][BestMove[1]] = "O"
                    currPlayer = playerX;
                }

            }
            else if(twoPlayer == true){
                document.getElementById(box).innerText="O"
                document.getElementById(box).style.opacity="1"
                currPlayer = playerX;
                board[parseInt(box[3]) - 1][parseInt(box[4]) - 1] = 'O';
                // document.getElementsByClassName("footer")[0].innerText="PlayerX";
                document.getElementsByClassName("footer")[0].style.color="red";
                document.getElementsByClassName("footer")[1].style.color="black";

                document.getElementsByClassName("footer")[0].innerText="Player1";
                document.getElementsByClassName("footer")[1].innerText="Player2";
            }
            // else if(computer == true){
            //     let BestMove;
            //     let BestScore = -Infinity;
            //     let tempBoard = board;
            //     for(let i = 0; i < 3; i++)
            //         {
            //             for(let j = 0; j < 3; j++)
            //                 {
            //                     if(tempBoard[i][j] == ' ')
            //                     {
            //                         tempBoard[i][j] = 'O';
            //                         let score = minimax(tempBoard, 0, true);
            //                         tempBoard[i][j] = ' '
            //                         if(score > BestScore)
            //                         {
            //                             BestScore = score;
            //                             BestMove = {i, j};
            //                         }
            //                     }
            //                 }
            //         }
            // }
            Playgame();
    }
}

function checkWinner()
{
    // let winner = null;

    //horizontal & vertical
    for( let i = 0; i < 3; i++)
        {
            if(board[i][0] == board[i][1] && board[i][0] == board[i][2] && board[i][0] != ' ')
                return board[i][0];
            if(board[0][i] == board[1][i] && board[0][i] == board[2][i] && board[0][i] != ' ')
                return board[0][i];
        }

    // diagonal
    if(
        (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[2][2] != ' ') ||
        (board[2][0] == board[0][2] && board[0][2] == board[1][1] && board[0][2] != ' ')
      )
        {
             return board[1][1];
        }

    //tie
    let count = 0;
    for(var i = 0; i < 3; i++)
    {
        for(var j = 0; j < 3; j++)
        {
            if(board[i][j] != ' ')
                    count++;
        }
    }
    if(count == 9)
        return 'tie';

    return null;
}

let scores = {
    'X' : -1,
    'O' : 1,
    'tie' : 0
};


function minimax(board, depth, isMaximizing){
    // console.log(board);
    let result = checkWinner();
    // console.log(result);
    if(result != null)
        {
            return scores[result];
            // return score;
        }
    
    if(isMaximizing)
    {
        let bestScore = -Infinity;
        // let bestMove;
        for(let i = 0; i < 3; i++)
            {
                for(let j = 0; j < 3; j++)
                    {
                        if(board[i][j] == ' ')
                        {
                            board[i][j] = "O";
                            let score = minimax(board, depth + 1, false);
                            board[i][j] = ' ';
                            if(score > bestScore)
                                {
                                    bestScore = score;
                                }
                        }
                    }
            }
            return bestScore;
    }
    else
    {
        let bestScore = Infinity;
        // let bestMove;
        for(let i = 0; i < 3; i++)
            {
                for(let j = 0; j < 3; j++)
                    {
                        if(board[i][j] == ' ')
                        {
                            board[i][j] = 'X';
                            let score = minimax(board, depth + 1, true);
                            board[i][j] = ' ';
                            if(score < bestScore)
                                {
                                    bestScore = score;
                                }
                        }
                    }
            }
            return bestScore;
    }
    
        

    // if(isMaximizing)
    // {

    // }
    // return 1;

}