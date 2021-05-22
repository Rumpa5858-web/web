/*
var arr = [4,5,6,8,9]
var arr2 =[10,11,12,13]

console.log(arr.join(' /'))

arr.fill(false)
console.log(arr)

arr3 = arr.concat(arr2)
console.log(arr3)

*/
var a = [5,6]
var b = Array.from(a)
console.log(Array.isArray(a))

b[0] = 10
console.log(a)
console.log(b)
