var babyObj = function(){
    this.x = 420;
    this.y = 320;
    this.eye = [];
    this.body = [];
    this.tail = [];
    
    this.angle = 0;
    
    this.tailCurrent;
    this.tailDuration;
    this.tailAnimalThreshold;
};

babyObj.prototype.init = function(){
    //eye
    for(let i=0; i<2; i++) {
        this.eye[i] = new Image();
        this.eye[i].src = "./img/babyEye" + i + ".png";
    }
    //body
    for(let i=0; i<20; i++){
        this.body[i] = new Image();
        this.body[i].src = "./img/babyFade" + i + ".png";
    }
    //tail
    for(let i=0; i<8; i++){
        this.tail[i] = new Image();
        this.tail[i].src = "./img/babyTail" + i + ".png";
    }
    
    this.tailCurrent = 0;
    this.tailDuration = 0;
    this.tailAnimalThreshold = 1000 / 30;
};

babyObj.prototype.draw = function(){
    ctxFront.save();
    ctxFront.translate(this.x , this.y);
    ctxFront.rotate(this.angle + Math.PI);
    ctxFront.drawImage(this.body[0], 
                        - this.body[0].width / 2, 
                        - this.body[0].height / 2, 
                        this.body[0].width, 
                        this.body[0].height);
    ctxFront.drawImage(this.tail[this.tailCurrent], 
                        -this.tail[0].width / 2 + 25, 
                        -this.tail[0].height / 2, 
                        this.tail[0].width, 
                        this.tail[0].height);
    ctxFront.drawImage(this.eye[0],
                        -this.eye[0].width / 2, 
                        - this.eye[0].height / 2, 
                        this.eye[0].width, 
                        this.eye[0].height);
    ctxFront.restore();
    
    this.x = lerpDistance(mom.x + 20, this.x, 0.99);
    this.y = lerpDistance(mom.y + 20, this.y, 0.99);
    
    this.angle = lerpAngle(Math.atan2(mom.y -this.y, mom.x - this.x), 
                            this.angle, 0.9);
    
    this.tailDuration += deltaTime;
    if(this.tailDuration > this.tailAnimalThreshold){
        this.tailDuration = 0;
        if(this.tailCurrent >= 7){
            this.tailCurrent = 0;
        } else {
            this.tailCurrent += 1;
        }
    }
};
