
 function add(a,b){
    return a + b
}
// function stored variable
var sum = add
console.log(sum(2,5))
console.log(typeof sum)
// function stored array
var arr = []
arr.push(add)
console.log(arr)
console.log(arr[0](5,6))
//function stored object
var obj = {
    sum : add
}
console.log(obj)
console.log(obj.sum(7,8))

// we create function as need
setTimeout( function(){
    console.log('i have created...')

} ,2000)



    
