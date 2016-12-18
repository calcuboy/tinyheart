var scoreboardObj = function(){
    
    this.x;
    this.y;
    
};

scoreboardObj.prototype.init = function(){
    
    this.x = canvasWidth /2;
    this.y = canvasHeight - 30;
    
};

scoreboardObj.prototype.draw = function(){
    
    ctxFront.save();
    ctxFront.fillStyle = "#dfcadf";
    ctxFront.shadowBlur = 10;
    ctxFront.shadowColor = "white";
    ctxFront.textAlign = "center";
    ctxFront.font="25px Verdana";
    ctxFront.fillText("SCORE:  " + data.score, this.x, this.y);
    ctxFront.restore();
    
    if(gameover){
        ctxFront.save();
        
        ctxFront.fillStyle = "#dfcadf";
        ctxFront.shadowBlur = 10;
        ctxFront.shadowColor = "white";
        ctxFront.textAlign = "center";
        ctxFront.font="55px Verdana";
        ctxFront.fillText("GAME OVER", this.x, canvasHeight / 2);
        
        ctxFront.restore();
    }
};