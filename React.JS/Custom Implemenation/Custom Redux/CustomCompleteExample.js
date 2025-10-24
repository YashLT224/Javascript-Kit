function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function cartReducer(state = { items: [] }, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, items: [...state.items, action.payload] };
    case "REMOVE_ITEM":
      return { ...state, items: state.items.filter(i => i !== action.payload) };
    default:
      return state;
  }
}


function combineReducers(reducers) {
  return function rootReducer(state = {}, action) {
    const newState = {};

    // Call each reducer independently
    for (let key in reducers) {
      newState[key] = reducers[key](state[key], action);
    }

    return newState;      // { counter: { count: 0 }, cart: { items: [] }}
  };
}



const rootReducer = combineReducers({
  counter: counterReducer,
  cart: cartReducer
});



const store = createStore(rootReducer);



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
