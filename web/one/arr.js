var arr = [4,7,6,9,8,5,30]
for( var i = 0; i<arr.length; i++){
    console.log(arr[i])
}

var arr = [4,7,6,9,8,5,30]
for( var i = 0; i<arr.length; i++){
   arr[i] = arr[i] + 4
}
console.log(arr)
 var sum = 0
 for( var i = 0; i<arr.length; i++){
     sum += arr[i]
 }
 console.log(sum)
/*
 for (var i = 0; i<arr.length; i++){
     if(arr[i] % 2 = 0){

     }
 }
 */


 // insert & remove //
  var arr = [1,2,3,4,5,6,7,8,9]
  arr.push(5)
  arr.unshift(7)
  arr.splice(4,0,55,70)
  console.log(arr)

  //remove//
  arr.pop()
  arr.shift()
  arr.splice(3,1)
  console.log(arr)
