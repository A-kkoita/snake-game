//board
var blockSize= 25;
var rows= 20;
var cols= 20;
var board;
var context;

//snake head
var snakeX = blockSize * 5
var snakeY = blockSize * 5;

var velocityX = 0;
var velocityY = 0;

var snakeBody = []; //we will use an array because ze snake wwill have to eat  many foods 

//food
var foodX;
var foodY;

var gameOver= false;  
    

window.onload = function() {
    board =document.getElementById("board");
    board.height =rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d"); //used for drawing on the board
    placeFood();
    document.addEventListener("keyup",changeDirection);
    //update();w
    setInterval(update,1000/10);//every 100  mili second the food will update
}
 function update() {
    if(gameOver){
        return;

    }

    context.fillStyle="skyblue";//background of the board
    context.fillRect(0,0,board.width,board.height);

    context.fillStyle="red";// food color
    context.fillRect(foodX,foodY,blockSize,blockSize);

    if(snakeX == foodX && snakeY == foodY){
      snakeBody.push([foodX, foodY])
      placeFood();
    }
    for (let i = snakeBody.length-1; i >0; i--){
        snakeBody[i] = snakeBody[i-1];
    }
     
    
 
if (snakeBody.length){ 
    snakeBody[0] = [snakeX,snakeY]; 

}
    context.fillStyle="green";//snake colour
    snakeX+=velocityX * blockSize;
    snakeY+=velocityY * blockSize;
    context.fillRect(snakeX,snakeY,blockSize,blockSize);
    
    for (let i = 0; i <snakeBody.length; i++){
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize,blockSize)
    }
    //game over conditions
    if (snakeX < 0 || snakeX > cols*blockSize || snakeY < 0|| snakeY > rows*blockSize){
        gameOver = true;
        alert("Game over");
    }
    for (let i= 0; i< snakeBody.length; i++){
        if (snakeX  == snakeBody[i][0] && snakeY == snakeBody[i][1]){
            gameOver = true;
            alert("Game Over");
        }


    }
    
 } 
 function changeDirection(e){
    if (e.code =="ArrowUp" && velocityY !=1){
        velocityX = 0;
        velocityY =-1;
    }
    else if (e.code =="ArrowDown" && velocityY !=-1){
        velocityX = 0;
        velocityY = 1;
    }
    else if (e.code =="ArrowLeft" && velocityX !=1){
        velocityX = -1;
        velocityY = 0;
    }
    else if (e.code =="ArrowRight" &&
     velocityX !=-1){
        velocityX = 1;
        velocityY = 0;
    }

 }

 function placeFood(){
    // randoms returns ,when multiplied to the  number of cols and rows a number btn 1-20 c'est sa qui fais le rouge bouge 

    foodX = Math.floor(Math.random() *cols) * blockSize;
    foodY = Math.floor(Math.random() *rows) * blockSize;
 }
 

 