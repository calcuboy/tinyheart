var momObj = function(){
    this.x = 400;
    this.y = 300;
    this.eye = [];
    this.body = [];
    this.bodyBlue = [];
    this.tail = [];
    
    this.angle = 0;
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
}

momObj.prototype.draw = function(){
    ctxFront.save();
    ctxFront.clearRect(0, 0, canvasWidth, canvasHeight);
    ctxFront.translate(this.x , this.y);
    ctxFront.rotate(this.angle + Math.PI);
    ctxFront.drawImage(this.body[0], 
                        - this.body[0].width / 2 +20, 
                        - this.body[0].height / 2, 
                        this.body[0].width , 
                        this.body[0].height);
    ctxFront.drawImage(this.tail[0], 
                        - this.tail[0].width / 2 + 50, 
                        - this.tail[0].height / 2, 
                        this.tail[0].width, 
                        this.tail[0].height);
    ctxFront.drawImage(this.eye[0], 
                        - this.eye[0].width / 2 + 20 , 
                        - this.eye[0].height / 2, 
                        this.eye[0].width, 
                        this.eye[0].height);
    ctxFront.restore();
    
    
    
    this.x = lerpDistance(mx, this.x, 0.98);
    this.y = lerpDistance(my, this.y, 0.98);
    
    this.angle = lerpAngle(Math.atan2(my -this.y, mx - this.x), this.angle, 0.9) ;
}


