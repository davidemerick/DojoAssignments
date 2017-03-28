
// counting 30 days

var reward = 1;
for(var i = 1; i <= 30; i++){
    reward = reward*reward;
}

console.log("Reward is" + (reward/100));