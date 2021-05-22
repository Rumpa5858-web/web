
 /*var arr = [4,6.7,12,45,85,66]
var find = 55
 var isFound = false
 for( var i = 0;  i<arr.length; i++ ){
     console.log('Data found at index'  + i)
     isFound = true 
     break;
 }
 if(!isFound){
     console.log('Data not found')
 } 
*/ 
 var arr = [
     [40,50,60,70],
     [50,60,70,80],
     [60,70,80,90]
 ]

 for(var i = 0; i<arr.length; i++){
     for ( var j = 0; j<arr[i].length; j++){
         console.log ('Element' + i + ':' + arr[i][j])
     }
 }