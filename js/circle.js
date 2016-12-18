var circleObj = function(){
    this.x = [];
    this.y = [];
    this.r = [];
    this.state = [];
    this.num = 30;
    this.type = [];
    
    this.circleDuration = 0;
    this.circvarick = 1000/60;
    this.circleStep = 1;
};

circleObj.prototype.init = function(){
    for(var i=0; i<this.num; i++) {
        this.state[i] = "die";
    }
    
};

circleObj.prototype.draw = function() {
    
    this.circleDuration += deltaTime;
    
    for(var i=0; i<this.num; i++){
        if(this.state[i] == "alive"){
            
            if(this.circleDuration > this.circvarick){
                this.r[i] += this.circleStep;
            }
            
            var alpha = 1 - this.r[i] / 75;
            
            ctxFront.save();
            ctxFront.beginPath();
            if(this.type[i] == "baby") {
                ctxFront.strokeStyle = "rgba(255, 100, 100, " + alpha + ")" ;
            } else {
                ctxFront.strokeStyle = "rgba(88, 255, 255, " + alpha + ")" ;
            }
            ctxFront.arc(this.x[i], this.y[i], this.r[i], 0, 2 * Math.PI);
            ctxFront.closePath();
            ctxFront.stroke();
            ctxFront.restore();
        }
        
        if(this.r[i] > 75){
            this.state[i] = "die";
        }
    }
    
    
    
};

circleObj.prototype.spawn = function(x, y, type) {
    for(var i=0; i<this.num; i++) {
        if(this.state[i] == "die") {
            this.state[i] = "alive";
            this.r[i] = 20;
            this.x[i] = x;
            this.y[i] = y;
            this.type[i] = type;
            
            return;
        }
    }
}

