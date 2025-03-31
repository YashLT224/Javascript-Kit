import {combineReducers} from 'redux';


const reducer= combineReducers({
    productReducer:productReducer,
    cartReducer:cartReducer
})



function customCombineReducer(reducers){
    const reducerKeys=Object.keys(reducers);
    return function( state={},action){
        let nextState={};
        for(let i=0;i<reducerKeys;i++){
            const key= reducerKeys[i];
             const reducer= reducers[key];
             const previousState= state[key]
             const updatednextState=reducer(previousState,action)
             nextState[key]=updatednextState
        }
        return nextState;

    }
}