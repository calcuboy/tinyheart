function collision(){
    
    collisionWithFruits();
    collisionWithBaby();
    
}

function collisionWithFruits(){
    for(var i=0; i<fruit.num; i++){
        var dis = Math.pow((fruit.x[i] - mom.x), 2) + Math.pow((fruit.y[i] - mom.y), 2)
        if(dis < 400){
            // fruit die
            if(fruit.state[i] != "die") {
                fruit.eated(i);
                
            }
        }
    }
    
}

function collisionWithBaby(){
    var dis = Math.pow((mom.x - baby.x), 2) + Math.pow((mom.y - baby.y), 2);
    if(dis < 200 && data.momLife > 0){
        data.babyLife += data.momLife;
        data.momLife = 0;
        //spawn a circle
        circle.spawn(baby.x, baby.y, "baby");
        heart.spawn(baby.x, baby.y);
    }
    
}