/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    let Obj={};
   if(this.length===0){
    return {}
   }
    for(let k of this){
        let item=k;
        console.log(item);
        let key= fn(item)+"";
         if(key in Obj){
            let value=Obj[key];
            value.push(item);
            Obj[key]=value;

        }
        else{
            
            Obj[key]=[item];
        }
    }
   
    return Obj;
    
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
