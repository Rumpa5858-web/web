var point ={
    x: 20,
    y: 40,
    z: 60
}

point.x = 50
point.y = 60
console.log(point)
point['y'] = 70
console.log(point)
var prob = 'a'
point[prob] = 80
console.log(point)
delete point.a
console.log(point)
