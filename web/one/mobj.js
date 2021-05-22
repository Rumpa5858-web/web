var obj = {
    x : 20,
    y : 30,
    z : 40
}
console.log(Object.keys(obj)) 
console.log(Object.values(obj))
console.log(Object.entries(obj))

var obj2 = Object.assign({}, obj)
obj2.z = 60
console.log(obj)
console.log(obj2)
