var canvasBack;
var canvasFront;

var ctxBack;
var ctxFront;

var lastTime;
var deltaTime;

var bgPic = new Image();
var canvasWidth;
var canvasHeight;

var ane;
var fruit;
var mom;
var baby;
var dust;
var heart;

//mouse position
var mx = 400;
var my = 300;

//score board
var scoreboard;

var data;

var gameover;

document.body.onload = game;

function game(){
    init();
    
    lastTime = Date.now();
    deltaTime = 0;
    
    gameloop();
}

function init(){
    //获得 canvas context
    canvasBack = document.getElementById("canvasBack");
    canvasFront = document.getElementById("canvasFront");
    
    ctxBack = canvasBack.getContext("2d");
    ctxFront = canvasFront.getContext("2d");
    
    bgPic.src = "./img/background.jpg";
    canvasWidth = canvasBack.width;
    canvasHeight = canvasBack.height;
    
    ane = new aneObj();
    ane.init();
    
    fruit = new fruitObj();
    fruit.init();
    
    mom = new momObj();
    mom.init();
    
    baby = new babyObj();
    baby.init();
    
    scoreboard = new scoreboardObj();
    scoreboard.init();
    
    circle = new circleObj();
    circle.init();
    
    data = new dataObj();
    data.init();
    
    dust = new dustObj();
    dust.init();
    
    heart = new heartObj();
    heart.init();
    
    gameover = false;
    
    canvasFront.addEventListener("mousemove", momFollow);
    

}

function gameloop(){
    window.requestAnimFrame(gameloop);
    
    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;
    
    
        drawBackground();
        ane.draw();
        fruit.draw();
        
       
        mom.draw();
        baby.draw();
        circle.draw();
        dust.draw();
        heart.draw();
        scoreboard.draw();
    
    if(!gameover){ 
        collision();
    }
}

function momFollow(event){
    if(!gameover){
        mx = event.offsetX;
        my = event.offsetY;
        
    }
}