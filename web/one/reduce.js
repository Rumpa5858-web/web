 
 var arr = [11,2,3,4,5]
 
 function myreduce(arr,cb,acc){
    for(var i =0; i<arr.length; i++){
    acc = cb( acc, arr[i])
    
    }
    return acc

}
 console.log(arr.reduce(function(prev, curr){
    return prev + curr
}))
var max = arr.reduce(function(prev,curr){
    return Math.max(prev,curr)
})


var min = arr.reduce(function(prev,curr){
    return Math.min(prev ,curr)
})
console.log(max , min)

