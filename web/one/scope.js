var a = 'abc'

function x() {
    var a = 40
    function y(){
        var a = 50
        console.log(a)
    } 
    
    console.log(a)
    y()
}
x()