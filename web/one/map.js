var arr = [2,4,6,8]  
/*

function myMap(arr,cb){
    var NewArr = []
    for(var i =0; i<arr.length; i++){
    var temp = cb(arr[i],i,arr)
    NewArr.push(temp)
    }
    return NewArr

}
*/

 
var sqr = arr.map(function(value){
    return value  * value
})

var qb = arr.map(function(value){
    return value * value * value
})


var mten = arr.map(function(value){
    return value * 5
})
console.log(arr)
console.log(qb)
console.log(mten)

/*
function myMap(arr){
    var NewArr = []
    for(var i =0; i<arr.length; i++){
    var temp = arr[i] * arr[i]
    NewArr.push(temp)
    }
    return NewArr

}
console.log(myMap(arr))
*/