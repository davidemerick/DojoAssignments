function randomChance(quarters, goal){
    for(quarters; quarters < goal; quarters--){
        var didYouWin = Math.trunc(Math.random()*100);
        if(didYouWin === Math.trunc(Math.random()*100)){
            var winnings = Math.floor(((Math.random()*50)+50));
            quarters += winnings;
            console.log("You won " + winnings + " quarters. " + "Quarters remaining: " + quarters);
        }
        else if(quarters > 0){
            console.log("You lost. Quarters remaining: " + quarters);
        }
        else{
            console.log("You lost. Out of quarters");
            break;
        }
    }
}

randomChance(50, 100);

function randomChance(quarters, goal){
    while(quarters < goal){
        var didYouWin = Math.trunc(Math.random()*100);
        if(didYouWin === Math.trunc(Math.random()*100)){
            var winnings = Math.floor(((Math.random()*50)+50));
            quarters += winnings;
            console.log("You won " + winnings + " quarters. " + "Quarters remaining: " + quarters);
        }
        else if(quarters > 0){
            console.log("You lost. Quarters remaining: " + quarters);
        }
        else{
            console.log("You lost. Out of quarters");
            break;
        }
        quarters--;
    }
}