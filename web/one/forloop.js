/*for ( var i=0; i<10; i++){
    console.log((i + 1) +  'retika bhattacharjee')

} */
 /*for (var i = 1; i<100; i++)
 
 if(i/2){
     console.log(i)
 }
*/

 


// while loop ****

var isrunning=true
while( isrunning){
    var rand = Math.floor(Math.random() * 10+1)
    if(random=9){
    console.log('winner winner chiken dnr')
    isrunning=false
    }
    else{
        console.log('you have got' + rand)
    }
}

//nested loop**

var n = 10
for(i = 1;   i < n; i++){
    var result = ''
    for(var j = 1;  j < n;  j++){
        result +=  j  +  ''

    }
    console.log(result)
}


var n = 5
for(i  =  1 ; i  <  n ;  i++){
    var result=''
    for (var j =  1;  j < n; j++){
        result +=   '*'
    }
    console.log(result)
}

  


