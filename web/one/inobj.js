var obj = {
    x : 20,
    y : 30,
    z : 40
}
 console.log('x' in obj)
  for (var i in obj) {
      console.log(i)
      console.log (i + ':' + (obj[i]))
  }