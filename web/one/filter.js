var arr = [1,2,4,5,9,6,8,7,3]


var myfilter = arr.filter(function(value){
    return value > 5
})
console.log (myfilter)


function filter(arr,cb){
    var NewArr = []
    for(var i =0; i<arr.length; i++){
    if( cb(arr[i],i,arr)){
    NewArr.push(arr[i])
    }
    }
    return NewArr
}


console.log(arr.filter(function(value){
    return value > 0
}))
console.log(arr.filter(function(value){
    return value > 5
}))
