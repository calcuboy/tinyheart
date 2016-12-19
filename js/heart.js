var heartObj = function(){
    this.x = [];
    this.y = [];
    this.index = [];
    this.state = [];
    
    this.num = 30;
    this.delta = 0;
    
    this.pic = [];
}

heartObj.prototype.init = function(){
    
    for(var i=0; i<7; i++){
        this.pic[i] = new Image();
        this.pic[i].src = "./img/heart" + i + ".png";
    }
    
    for(var j=0; j<this.num; j++) {
        this.state[j] = "die";
    }
    
}

heartObj.prototype.draw = function(){
    
    for(var i=0; i<this.num; i++) {
        if(this.state[i] == "alive") {
            ctxFront.save();
            ctxFront.translate(this.x[i], this.y[i]);
            ctxFront.drawImage(this.pic[this.index[i]],
                                -15,
                                -7,
                                15,
                                15);
            
            ctxFront.restore();
            
            this.y[i] -= 2;
        }
    }
    

    this.delta += deltaTime;
    if(this.delta  > 2000 /16 ) {
        this.delta = 0;
        for(var j=0; j<this.num; j++) {
            if(this.state[j] == "alive") {
                this.index[j] ++;
                if(this.index[j] > 6) {
                    this.state[j] = "die";
                }
            }
            
        }
    }
    
    
    
}

heartObj.prototype.spawn = function(x, y){
    
    for(var i=0; i<this.num; i++) {
        if(this.state[i] == "die") {
            this.state[i] = "alive";
            this.x[i] = x;
            this.y[i] = y;
            this.index[i] = 0;
            
            return;
        }
    }
    
  
    
}