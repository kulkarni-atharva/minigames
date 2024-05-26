// console.log("Hello")
document.onkeydown = function(e){
    console.log("Key code is:", e.keyCode)
    console.log("Key is:", e.key)
    if(e.keyCode == 32)
    {
        document.getElementsByClassName("dino")[0].classList.add("animateDino");
        setTimeout(() => {
            document.getElementsByClassName("dino")[0].classList.remove("animateDino");
        }, 900);
    }
}
let score = 0;
let gameOver = false;
let myscore = "";
let crossed = true;
setInterval(() => {
    dino = document.getElementsByClassName("dino")[0]
    villain = document.getElementsByClassName("villain")[0]
    let dinoBottom = parseInt(window.getComputedStyle(dino, null).getPropertyValue("bottom")); // values in pixels, need to convert to int
    let dinoLeft = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
    let villainLeft = parseInt(window.getComputedStyle(villain, null).getPropertyValue("left"));

    // console.log("values:", dinoBottom, dinoLeft, villainLeft);
    difference = Math.abs(villainLeft - dinoLeft)
    if(difference < 20 && dinoBottom < 3) 
    {
        // crossed = true;
        gameOver == true;
        document.getElementsByClassName("gameOver")[0].style.visibility = "visible";
        villain.classList.remove("animateVillain");
        // console.log(gameOver);
    }
    else if(villainLeft < dinoLeft && crossed)
        {
            score+=1;
            console.log("score is:",score)
            // myscore = toString(score);
            document.getElementsByClassName("scoreCount")[0].innerHTML = "Your Score: " + score;
            crossed = false;
            setTimeout(() => {
                crossed = true;
            }, 1000);
            // console.log("myscore = ", myscore)
        }
}, 100);
// while(!gameOver)
// {
    
// }
