var TimeLimitedCache = function() {
    this.store=new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const expiry= Date.now()+duration;
    let keyExists=false;
    if(this.store.has(key)){
        keyExists=true;
    }
    this.store.set(key,{value, expiry});

    setTimeout(()=>{
            if(this.store.has(key)&&this.store.get(key).expiry===expiry){
                this.store.delete(key);
            }
    },duration)
    return keyExists;
    
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    const entry= this.store.get(key);
     if(!entry){
        return -1;
     }
     if(Date.now()>entry.expiry){
         this.store.delete(key);
         return null;
     }
return entry.value;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
 return this.store.size};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
