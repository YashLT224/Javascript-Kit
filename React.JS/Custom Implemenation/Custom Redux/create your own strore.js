const store= createStore(reducer);
console.log(store); // getState, dispatch, subscribe,liftedStore,observables,replace reducer,





//🧱 Goals of Our Store
//Our custom store will support:
//✅ getState() – read store data
//✅ dispatch(action) – update state
//✅ subscribe(listener) – listen to changes
//✅ Reducer pattern → (state, action) => newState


//Myredux.js

function createStore(reducer, initialState) {
  let state = initialState;
  let listeners = [];

  // Return current state
  function getState() {
    return state;
  }

  // Subscribe for state changes
  function subscribe(listener) {
    listeners.push(listener);

    // Return unsubscribe function
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  }

  // Dispatch action to update state
  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach(listener => listener()); // Notify all subscribers
  }

  // Initialize store by dispatching dummy action
  dispatch({ type: "@@INIT" });

  return {
    getState,
    dispatch,
    subscribe
  };
}
