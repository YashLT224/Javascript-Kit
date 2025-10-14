let arr=[1,2,3,4]

Array.prototype.myForEach=function(callback){
   for(let i=0;i<this.length;i++){
       callback(this[i],i,this);
   }
}


arr.myForEach((item)=>{
    console.log(item)
})
 

