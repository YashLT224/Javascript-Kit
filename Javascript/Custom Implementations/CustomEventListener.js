class CustomEventListener{
    constructor(){
        this.events={};
    }

    addEvent(EventName,cb){
        if(!this.events[EventName]){
            this.events[EventName]=[];
        }
        this.events[EventName].push(cb);
    }
    
  removeEvent(EventName, callback) {
        if (this.events[EventName]) {
            // Filter out the callback function
            this.events[EventName] = this.events[EventName].filter((cb) => cb !== callback);
        }
    }
    
    TriggerEvent(EventName,...args){
        if(this.events[EventName]){
            let CallbackLists=this.events[EventName]
            for(let i=0;i<CallbackLists.length;i++){
                let cb= CallbackLists[i]
                cb(...args);
            }
        }
    }
}

function a(){
    console.log('click1')
}

function b(){
    console.log('click2')
}

const eventListener=new CustomEventListener();
eventListener.addEvent('click',a)
eventListener.addEvent('click',b)
eventListener.TriggerEvent('click')
eventListener.removeEvent('click',b)
 eventListener.TriggerEvent('click')