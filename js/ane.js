/*global canvasBack*/

var aneObj = function(){
    this.x = [ ];
    this.len = [];
    this.step ;
}

aneObj.prototype.num = 50;

aneObj.prototype.init = function(){
    
    this.step = canvasWidth / this.num;
    for(var i=0; i<this.num; i++){
        this.x[i] = i * this.step + Math.random() * this.step;
        this.len[i] = 200 + Math.random() * 50;
    }
};

aneObj.prototype.draw = function(){
    
    ctxBack.save();
    ctxBack.globalAlpha = 0.6;
    ctxBack.strokeStyle = "#3b154e";
    ctxBack.lineWidth = 20;
    ctxBack.lineCap = "round";
    for(var i=0; i<this.num; i++){
        ctxBack.beginPath();
        ctxBack.moveTo(this.x[i], canvasHeight);
        var waveStep = Math.sin((Date.now() / 1600) % (Math.PI * 2 )) * this.step * 4;
        //ctxBack.lineTo(this.x[i]+ waveStep, canvasHeight  - this.len[i]);
        ctxBack.quadraticCurveTo(this.x[i], canvasHeight  - this.len[i] * 0.4, this.x[i]+ waveStep, canvasHeight  - this.len[i]);
        ctxBack.stroke();
    }
    ctxBack.restore();
};