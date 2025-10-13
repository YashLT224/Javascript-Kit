let arr=[1,2,3,4]

let originalResult= arr.map((item)=>{
    return item*2;
})
console.log(originalResult);


Array.prototype.myMap=function(callback){
    const newArray=[];
    for(let i=0;i<this.length;i++){
        newArray[i]=callback(this[i],i,this);
    }
    return newArray;
}


let result= arr.myMap((item)=>{
    return item*2;
})

console.log(result);

