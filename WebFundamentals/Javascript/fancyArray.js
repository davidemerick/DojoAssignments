function fancyArray(arr, symbol){
    for(var i = 0; i < arr.length; i++){
        console.log(i + " " + symbol + " " + arr[i]);
    }   
}

testArr = ["James","Jill","Jane","Jack"];

fancyArray(testArr,"->");
