function addAll(){
    var sum = 0
    for(var i = 0; i<arguments.length; i++){
        sum += arguments[i]
    }
    return sum

} 
 var result = addAll(1,2,3)
 console.log(result)

 function person( Name,Email) {
     return{
         Name : Name,
         Email : Email
     }
     
 }
 var p1 = person('Retika Bhattacharjee','rumparetika5916@gmail.com')
 console.log(p1)