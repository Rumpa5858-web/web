var arr = [6,7,8,9,10]


function foreach (arr,cb) {
    for(var i = 0; i < arr.length; i++){
        cb (arr[i] , i,arr)
    }
}
var sum = 0
foreach (arr,function(value,index,arr){
    console.log(value,index,arr)
    sum += value 
}
)
console.log(sum)

foreach(arr,function(value,index,arr){
    arr[index] = value + 2

}
)
console.log(arr)
