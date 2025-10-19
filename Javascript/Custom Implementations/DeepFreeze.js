let a={
    name:'yash',
    address:{
        city:"chandigarh",
        state:'chandigarh'
    }
}


function deepFreeze(obj){
    Object.keys(obj).forEach((prop)=>{
        if(typeof obj[prop]==='object'&& !Object.isFrozen(obj[prop])){
             deepFreeze(obj[prop]);
        }
    })
    return Object.freeze(obj);
}

deepFreeze(a);
a.name='Tarun'
a.address.city='mohali'
console.log(a);

