var fruitObj = function () {
    this.x = [];
    this.y = [];
    this.speed = [];
    this.speedfactor = 0.5;
    this.speedBase = 0.5;
    
    this.growSpeed = 0.1;
    this.maxSize = 15;
    this.size = [];
    
    this.spawDuration = 1000;
    this.spawDelta = 0;
    this.aliveNum = 0;
    this.num;
    
    this.growTime = 1;
    this.state = [];  //die, alive, growing
    
    this.type = [];
    
    this.step;
    
    this.scorePerFruit; //how score per fruit
    
};

fruitObj.prototype.pic = new Image();
fruitObj.prototype.bluePic = new Image();

fruitObj.prototype.init = function() {
    this.num = 30;
    for(var i=0; i<this.num; i++) {
        this.state[i] = "die";
    }
    
    this.pic.src = "./img/fruit.png";
    this.bluePic.src = "./img/blue.png";
    
    this.step = ane.step;
    
    this.scorePerFruit = 10;
};

fruitObj.prototype.draw = function(){

    var w,h;
    
    for(var i=0; i<this.num; i++) {
        switch(this.state[i]) {
            case "growing":
                var waveStep = Math.sin(( Date.now() / 1600) % (Math.PI * 2 )) * this.step * 4;
                this.size[i] += this.growSpeed;
                
                w = this.size[i];
                h = this.size[i];
                ctxBack.drawImage(
                    this.type[i]=="orange"?this.pic:this.bluePic, 
                    this.x[i] - w/2 + waveStep, 
                    this.y[i]-h / 2 ,
                    w, h );
                
                if(this.size[i] >= this.maxSize) {
                    this.size[i] = this.maxSize; 
                    this.x[i] += waveStep;
                    this.state[i] = "alive";
                } 
                break;
            case "alive":
                w = this.size[i];
                h = this.size[i];
                ctxBack.drawImage(
                    this.type[i]=="orange"?this.pic:this.bluePic, 
                    this.x[i] - w/2, 
                    this.y[i]-h / 2 ,
                    w, h );
                if(this.y[i]> - h){
                    this.y[i] -= this.speed[i] * deltaTime / 16;

                } else {
                    this.state[i] = "die";
                    this.aliveNum--;
                }
                break;
            case "die":
                break;

        }
    }
    
    if(this.aliveNum < 30){
        this.spawn();
    }
    
};

fruitObj.prototype.eated = function( i ) {
    this.state[i] = "die";
    this.aliveNum --;
    
    data.score += this.scorePerFruit;
    if(data.momDouble > 0) {
        data.momDouble --;
        data.score += this.scorePerFruit;
    } else {
        mom.state = "nomal";
    }
    
    
    data.momLife ++;
    
    if(this.type[i] == "blue"){
        data.momDouble ++;
        mom.state = "double";
    }
    
    circle.spawn(this.x[i], this.y[i], "fruit");
    
}

fruitObj.prototype.spawn = function(){
    //random spawn time
    if(this.spawDelta < 500 + Math.random() * this.spawDuration){
      this.spawDelta += deltaTime;
      return;  
    } 
    for(var i=0; i<this.num; i++){
        if(this.state[i] == "die") {
            this.state[i] = "growing";
            this.speed[i] =  this.speedBase + Math.random() * this.speedfactor;
            var r = Math.round(Math.random() * ane.num);
            this.x[i] = ane.x[r];
            this.y[i] = canvasHeight - ane.len[r];
            this.size[i] = 0;
            this.aliveNum ++;
            this.spawDelta = 0;
            this.type[i] = Math.random()>0.2?"orange":"blue";
            break;
        }
    }
}





