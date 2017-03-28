
function daysUntilBirthday(days){
    var bdayMsg = "";
    
    while(days != -1){
        if(days >= 30){
            bdayMsg = " So far away...";
        }
        else if (days < 30 && days >= 5){
            bdayMsg = " Getting closer!";
        }
        else if (days < 5 && days > 0){
            bdayMsg = " IT'S SO CLOSE!!!";
        }
        else if (days == 0){
            bdayMsg = " HAPPY BIRTHDAY!!!!";
        }
        console.log(days + bdayMsg);
        days--;
    }
}

daysUntilBirthday(34);