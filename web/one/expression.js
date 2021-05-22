var addition = function(a,b){
return a+b
    
}
addition(10,20)
setTimeout( function() {
    console.log('i will come back')
} , 3000)

var another = addition
console.log(another(10,20))
    