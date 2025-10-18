function setTimeoutPolyfill(callback, delay, ...args) {
  const start = Date.now();
  let timerId = { cleared: false };

  function checkTime() {
    if (timerId.cleared) return; // Stop if cleared

    const elapsed = Date.now() - start;
    if (elapsed >= delay) {
      callback(...args);
    } else {
      requestAnimationFrame(checkTime); // Efficient re-check
    }
  }

  requestAnimationFrame(checkTime);
  return timerId;
}

function clearTimeoutPolyfill(timerId) {
  if (timerId) {
    timerId.cleared = true;
  }
}


//way2


function creatSetTimeout(){
    var TimerId=0;
     var TimerMap={}


     function setTimeoutPolyfill(cb,delay,...args){
        var id= TimerId++;
        TimerMap[id]=true;
        var start= Date.now();


        function Triggercb(){
            if(!TimerMap[id])return;
            if(Date.now()> start+delay){
                  callback(...args);
            }
            else{
                requestIdleCallback(Triggercb);
            }
        }

        requestIdleCallback(Triggercb);
        return id;
     }

     function clearTimeout(id){
        delete TimerMap(id);
     }

     return {clearTimeout,setTimeoutPolyfill}
}