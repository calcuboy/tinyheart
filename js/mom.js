var momObj = function(){
    this.x = 400;
    this.y = 300;
    this.eye = [];
    this.body = [];
    this.bodyBlue = [];
    this.tail = [];
    
    this.angle = 0;
    
    this.tailCurrent;
    this.tailDuration;
    this.tailAnimalThreshold;
    
    this.eyeCurrent = 0;
    this.eyeDuration = 0;
    this.eyeAnimals = [3000, 50];  //每幅画面持续时间
    
    this.state = "nomal";
}

momObj.prototype.init = function(){
    //eyes
    for(var i=0; i<2; i++){
        this.eye[i] = new Image();
        this.eye[i].src = "./img/bigEye" + i + ".png";
    }
    //bodys
    for(var i=0; i<8; i++){
        this.body[i] = new Image();
        this.body[i].src = "./img/bigSwim" + i + ".png";
    }
    //bodys blue
    for(var i=0; i<8; i++){
        this.bodyBlue[i] = new Image();
        this.bodyBlue[i].src = "./img/bigSwimBlue" + i + ".png";
    }
    //tails
    for(var i=0; i<8; i++){
        this.tail[i] = new Image();
        this.tail[i].src = "./img/bigTail" + i + ".png";
    }
    
    this.tailCurrent = 0;
    this.tailDuration = 0;
    this.tailAnimalThreshold = 1000 / 30;
}

momObj.prototype.draw = function(){
    
    var bodyIndex = data.momLife;
    if(bodyIndex < 0) bodyIndex = 0;
    if(bodyIndex > 7) bodyIndex = 7;
    
    ctxFront.save();
    ctxFront.clearRect(0, 0, canvasWidth, canvasHeight);
    ctxFront.translate(this.x , this.y);
    ctxFront.rotate(this.angle + Math.PI);
    if(this.state == "nomal") {
        ctxFront.drawImage(this.body[bodyIndex], 
                            - this.body[0].width / 2 +20, 
                            - this.body[0].height / 2, 
                            this.body[0].width , 
                            this.body[0].height);
    } else {
        ctxFront.drawImage(this.bodyBlue[bodyIndex], 
                            - this.body[0].width / 2 +20, 
                            - this.body[0].height / 2, 
                            this.body[0].width , 
                            this.body[0].height);
    }
    ctxFront.drawImage(this.tail[this.tailCurrent], 
                        - this.tail[0].width / 2 + 50, 
                        - this.tail[0].height / 2, 
                        this.tail[0].width, 
                        this.tail[0].height);
    ctxFront.drawImage(this.eye[this.eyeCurrent], 
                        - this.eye[0].width / 2 + 20 , 
                        - this.eye[0].height / 2, 
                        this.eye[0].width, 
                        this.eye[0].height);
    ctxFront.restore();
    
    
    
    this.x = lerpDistance(mx, this.x, 0.98);
    this.y = lerpDistance(my, this.y, 0.98);
    
    this.angle = lerpAngle(Math.atan2(my -this.y, mx - this.x), this.angle, 0.9) ;
    
    
    // animal of tail
    this.tailDuration += deltaTime;
    if(this.tailDuration > this.tailAnimalThreshold){
        this.tailDuration = 0;
        if(this.tailCurrent >= 7){
            this.tailCurrent = 0;
        } else {
            this.tailCurrent += 1;
        }
    }
    
    //animal of eye
    this.eyeDuration += deltaTime;
    if(this.eyeDuration > (this.eyeAnimals[this.eyeCurrent] * ( 1 + Math.random())  )) {
        this.eyeDuration = 0;
        this.eyeCurrent ++;
        if(this.eyeCurrent >= 2){
            this.eyeCurrent = 0;
        }
    }  
    
    
}


