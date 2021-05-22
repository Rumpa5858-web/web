function sqr(n){
    return n*n
}
console.log(sqr(9))
console.log(sqr(6))
console.log(sqr(3))


var n = 50
// not pure function
function change(){
n = 100
}
change()
console.log(n)

var point = {
    x: 20,
    y: 40
}
 function printPoint(point){
     point.x = 200
     point.y = 400
     console.log(point)
 }
 printPoint(point)
 console.log(point)


 