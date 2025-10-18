//way 1 by date 

function throttling(cb,delay){
    let lastTime=0;
    return function(...args){
        const now= new Date.getTime();
        if(now-lastTime>=delay){
            lastTime=now;
              fn.apply(this,args)
        }
    }
}





//way2

function throttling(cb, delay) {
  let flag = true;

  return function (...args) {
    if (flag) {
      cb.apply(this, args); // Execute the callback immediately
      flag = false; // Disable further execution
      setTimeout(() => {
        flag = true; // Re-enable execution after the delay
      }, delay);
    }
  };
}
