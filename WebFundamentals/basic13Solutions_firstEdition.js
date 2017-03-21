// Two functions solving the Coding Dojo basic 13
// Using Math

function printNumAlgos(algo){
    var sum = 0;   
    var newArr = []; 
    for(var i = 1; i<=255; i++){
        // print 1-255
        if(algo === 1){
            console.log(i); 
        }
        // print odds, 1-255
        else if(algo === 2){
            if(i % 2 === 1){
                console.log(i); 
            }
        }
        // print sum, 1-255
        else if(algo === 3){
            sum += i;
            console.log(sum);
        }
        // create array 1-255
        else if(algo === 4){
            if(i % 2 === 1){
                newArr.push(arr[i]);
            }
        }
    }
}

function arrAlgos(algo, arr, Y){
    var avg = 0;
    for(var i = 0; i <= arr.length; i++){
        // print array
        if(algo === 1){
            console.log(arr[i]);
        }
        // print max of array
        else if(algo === 2){
            console.log(Math.max(...arr));
        }
        // print avg of array & avg/min/max
        else if( (algo ===3) || (algo === 7)){
            avg += arr[i];
            console.log(avg/arr.length);
            if(algo === 7){
                console.log(Math.min(...arr));
                console.log(Math.max(...arr));
            }
        }
        // return array index squared
        else if(algo === 4){
            arr[i] = arr[i]*arr[i];
        }
        // return greater than Y
        else if(algo === 5){
            if(arr[i]>Y){
                avg++;
                console.log(avg);
            }
        }
        // return Arr w neg as 0
        else if(algo === 6){
            if(arr[i] < 0){
                arr[i] = 0;
            }
        }
        // shift array values
        else if(algo === 8){
            arr[i] = arr[i+1];
            arr[arr.length-1] = 0;
        }
        // swap string for array
        else if(algo === 9){
            if(arr[i]<0){
                arr[i] = "Dojo";
            }
        }
    }
    // return array upon completion of for loop
    return(arr);
}
