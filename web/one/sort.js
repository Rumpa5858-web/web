var arr = [1,2,-1,5,6,0,-5,8,-9,9,-3,7]
//SORT FUNCTION
arr.sort(function(a,b){
    if(a>b){
        return 1
    }
    else if(a<b){
        return -1
    }
    else{
        return 0
    }
})
 console.log (arr)

 var persons = [
     {   Name:'A',
         age : 25
         
     },
     {
        Name:'B',
        age : 21
        
    },
    {
        Name:'C',
        age : 10
        
    },
    {
        Name:'D',
        age : 29
        
    }

 ]
 persons.sort(function(a,b){
    if(a.age>b.age){
        return 1
    }
    else if(a.age<b.age){
        return -1
    }
    else{
        return 0
    }
})
 console.log (persons)
//EVERY FUNCTION
 console.log(arr.every(function(value){
    return value > 0
}))

// SOME FUNCTION

console.log(arr.some(function(value){
    return value > 0
}))

