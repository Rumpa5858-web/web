function add(a,b) {
    var result = a+b
    console.log (result)
    
}
add( 77895,65932)
 
function sub(a,b) {
    var result = a-b
    console.log (result)
    
}
sub( 77895,65932)

var arr1 =[45,78,96]
var arr2 =[45,65,46]
var arr3 =[13,32,21]

function sumofArray(arr){
    var sum = 0
    for(var i =0; i<arr.length; i++){
        sum -= arr[i]
    }
    console.log(sum)
}
sumofArray(arr1)
sumofArray(arr2)
sumofArray(arr3)

function test(){
    for(var i = 0; i<arguments.length; i++){
        console.log(arguments[i])
    }
}
test(10,20,30)
