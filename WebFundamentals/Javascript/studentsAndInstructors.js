function directory(users){
 
  // Create array of keys in users: Students & Instructors
  var userTypes = Object.keys(users);
  var userType1 = userTypes[0];
  var userType2 = userTypes[1];
  
     // enumerates keys in users: Students & Instructors
    for(var key in users){
      console.log(key);
        var arr = users[key];
        // enumerates properties in array
        var counter = 1;
        for(var prop in arr){
            console.log(counter + " " + arr[prop].first_name + " " + arr[prop].last_name + " " + (arr[prop].first_name.length + arr[prop].last_name.length));
        counter++;
        }
    }

}

var users = {
 'Students': [ 
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
  ],
 'Instructors': [
     {first_name : 'Michael', last_name : 'Choi'},
     {first_name : 'Martin', last_name : 'Puryear'}
  ]
 }

directory(users);








/*
function enumArr(students){
    for(var i in students){
      console.log(students[i].first_name + " " + students[i].last_name);
    }
}

var students = [ 
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
]

enumArr(students);

function directory(users){
 
  // Create array of keys in users: Students & Instructors
  var userTypes = Object.keys(users);
  var userType1 = userTypes[0];
  var userType2 = userTypes[1];
  
     // enumerates keys in users: Students & Instructors
    for(var key in users){
      console.log(key);
        var arr = users[key];
        // enumerates properties in array
        for(var prop in arr){
            console.log(arr[prop].first_name + " " + arr[prop].last_name);
        }
    }

}

var users = {
 'Students': [ 
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
  ],
 'Instructors': [
     {first_name : 'Michael', last_name : 'Choi'},
     {first_name : 'Martin', last_name : 'Puryear'}
  ]
 }

directory(users);


var users = {
 'Students': [ 
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
  ],
 'Instructors': [
     {first_name : 'Michael', last_name : 'Choi'},
     {first_name : 'Martin', last_name : 'Puryear'}
  ]
 }



function enumArrOverThink(arrOfObjs){
    var firstObj = "";
    var secondObj = "";
    for(var i in arrOfObjs){
        firstObj = arrOfObjs[i];
        for(var j in arrOfObjs[i]){
            secondObj = arrOfObjs[i[j]];
        }
        console.log(firstObj + " " + secondObj);
    }
}
*/

