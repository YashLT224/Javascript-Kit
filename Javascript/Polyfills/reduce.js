let arr=[1,2,3,4]

Array.prototype.myReduce=function(callback,initialValue){
    let accumulator=initialValue;
    for(let i=0;i<this.length;i++){
        if(accumulator){
            accumulator=callback(accumulator,this[i],i,this)
        }
        else{
            accumulator=this[i];
        }
    }
    return accumulator;
}


let value= arr.myReduce((acc,curr)=>{
    return acc=acc+curr;
})
console.log(value);
