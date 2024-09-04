var board = [];
var minesCount = 10;
var minesLocation = []
var rows = 8;
var cols = 8;
var flags = false;
var gameOver = false;
var tileClicked = false;

window.onload = function(){
    startGame();
}
function flagClick(){
    if(flags)
    {
        document.getElementById("flag").style.backgroundColor = "whitesmoke";
        flags = false;
    }
    else
    {
        document.getElementById("flag").style.backgroundColor = "rgb(163, 157, 157)";
        flags = true;
    }

}
function startGame(){
    document.getElementById("mines-count").innerText = "Mines : " + minesCount.toString();
    for(var i = 0; i < rows; i++)
    {
        var row = []
        for(var j = 0; j < cols; j++)
        {
            var tile = document.createElement("div") //<div></div>
            tile.id = i.toString() + "-" + j.toString();
            tile.innerText = "";
            tile.addEventListener("click", tileClick);
            document.getElementById("board").append(tile);
            row.push(tile)
        }
        board.push(row)
        console.log(i)
    }
    console.log(board)
    createMines();
}
function createMines(){
    var minesCreated = 0;
    while(minesCreated < minesCount)
    {
        var randomRows = Math.floor(Math.random() * rows);
        var randomCols = Math.floor(Math.random() * cols);
        var location = randomRows.toString() + "-" + randomCols.toString();
        if(minesLocation.includes(location))
            continue;
        else
        {
            minesLocation.push(location);
            minesCreated++;
        }
    }
    console.log(minesLocation);
    
}

function tileClick(){
    if(gameOver)
        return;
    let tile = this;
    if(flags)
    {
        // console.log("flags is true");
        if(tile.innerText == "🚩")
        {
            tile.innerText = "";
            // console.log("flag removed");
        }
        else
        {
            tile.innerText = "🚩";
            document.getElementById(tile.id).style.display = "visible";
            // console.log("flag added");
        }
    }
    else if(minesLocation.includes(tile.id))
    {
        gameOver = true;
        alert("Game Over");
        revealMines();
    }
    else if(tile.innerText != "🚩")
    {
        console.log("hello");
        var loc = (tile.id).split("-");
        console.log(loc);
        var r = parseInt(loc[0]);
        var c = parseInt(loc[1]);
        var total = countAdjMines(r, c);
        console.log(total);
        // document.getElementById(tile.id).classList.add("tileClicked");
        var color = "x" + total.toString();
        document.getElementById(tile.id).classList.add(color);
        tile.innerText = total;
        if(total == 0)
            tile.style.color = "rgb(163, 157, 157)";
        document.getElementById(tile.id).style.display = "visible";
        document.getElementById(tile.id).style.backgroundColor = "rgb(163, 157, 157)";
    }
    checkGameOver();

}
function revealMines(){
    for(var i = 0; i < minesLocation.length; i++)
    {
        document.getElementById(minesLocation[i]).innerText = "💣";
        document.getElementById(minesLocation[i]).style.backgroundColor = "red";
    }
}
function countAdjMines(r, c){
    if(r >= rows || c >= rows || r < 0 || c < 0)
        return 0;

    var mines = 0

    mines += checkMine(r, c - 1);
    mines += checkMine(r, c + 1);

    mines += checkMine(r - 1, c);
    mines += checkMine(r + 1, c);

    mines += checkMine(r - 1, c - 1);
    mines += checkMine(r - 1, c + 1);
    mines += checkMine(r + 1, c - 1);
    mines += checkMine(r + 1, c + 1);

    if(mines == 0)
    {
        clickAdjTile(r, c - 1);
        clickAdjTile(r, c + 1);
        clickAdjTile(r - 1, c);
        clickAdjTile(r + 1, c);
        clickAdjTile(r - 1, c - 1);
        clickAdjTile(r - 1, c + 1);
        clickAdjTile(r + 1, c - 1);
        clickAdjTile(r + 1, c + 1);
    }
    return mines;
}

function checkMine(r , c){
    var loc = r.toString() + "-" + c.toString();
    if(minesLocation.includes(loc))
        return 1;
    else
        return 0;
}
function checkGameOver(){
    for(var i = 0; i < minesLocation.length; i++)
    {
        if(document.getElementById(minesLocation[i]).innerText != "🚩")
            return;
    }
    gameOver = true;
    alert("You Win!");
}
function clickAdjTile(r, c){
    if(r >= rows || c >= rows || r < 0 || c < 0)
        return;
    let tile = document.getElementById(r.toString() + "-" + c.toString());
    if(tile.classList.length != 0)
        return;
    document.getElementById(r.toString() + "-" + c.toString()).click();

}