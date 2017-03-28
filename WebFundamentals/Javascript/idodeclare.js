function canHaveTheTime(HOUR, MINUTE, PERIOD){
    var afterAlmost = "";
    var morningEvening = "";

    if(MINUTE < 30){
        afterAlmost = "just after";
    }
    else{
        afterAlmost = "almost";
    }
    if(PERIOD === "AM"){
        morningEvening = "in the morning";
    }
    else{
        morningEvening = "in the evening";
    }
}