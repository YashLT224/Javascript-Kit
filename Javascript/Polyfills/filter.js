let arr=[1,2,3,4]

let originalResult= arr.filter((item)=>{
    return item%2===0;
})
console.log(originalResult);


Array.prototype.myFilter=function(callback){
    const newArray=[];
    for(let i=0;i<this.length;i++){
        if(callback(this[i],i,this)){
             newArray.push(this[i]);
        }
       
    }
    return newArray;
}


let result= arr.myFilter((item)=>{
    return item%2===0;
})

console.log(result);

