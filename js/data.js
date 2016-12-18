var dataObj = function(){
    this.score;
    this.babyLife;
    this.momLife;
    this.momDouble;
}

dataObj.prototype.init = function(){
    this.score = 0;
    this.babyLife = 20;
    this.momLife = 0;
    this.momDouble = 0;
}

