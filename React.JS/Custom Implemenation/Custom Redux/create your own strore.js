const store= createStore(reducer);
console.log(store); // getState, dispatch, subscribe,liftedStore,observables,replace reducer,


//Myredux.js

function myStore(reducer){
    let state;
     let listerners=[];


     let store={
       dispatch(action){
        state= reducer(state, action)
     },

       getState(){
         return state;
     },

       subscribe(listener){
       listeners.push(listener);
        return function(){
            // unsubscribe
            let listenerIndex= listeners.findIndex(r=>r===listener)
            listerners.slice(listenerIndex,1)
        }
     }
    }

        store.dispatch({type:'@@Init'})
    return store;
}