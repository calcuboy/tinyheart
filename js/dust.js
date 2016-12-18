var dustObj = function(){
    this.dustPic = [];

    
    this.x = [];
    this.y = [];
    this.type = [];
    
    this.total;
    this.picnum = 7;
}

dustObj.prototype.init = function(){
    
    this.total = 30;
    
    for(var i=0; i<this.picnum; i++) {
        this.dustPic[i] = new Image();
        this.dustPic[i].src = "./img/dust" + i + ".png";
    }
    

    
    for(var i=0; i<this.total; i++){
        this.x[i] = Math.random() * canvasWidth;
        this.y[i] = Math.random() * canvasHeight;
        this.type[i] = Math.floor(Math.random() * this.picnum);
    }
}

dustObj.prototype.draw = function(){
    
    for(var i=0; i<this.total; i++){
        ctxFront.save();
        
        var img = this.dustPic[this.type[i]];
        var w = img.width;
        var h = img.height;
        var waveStep = Math.sin((Date.now() / 1600) % (Math.PI * 2 )) * ane.step * 4;
        ctxFront.drawImage(img, 
                this.x[i] + waveStep,
                this.y[i], w, h);
        
        ctxFront.restore();
    }
    
}