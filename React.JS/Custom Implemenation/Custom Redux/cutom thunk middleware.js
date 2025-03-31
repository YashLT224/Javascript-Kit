const myThunk=({dispatch, getState})=>(next)=>(action)=>{
    if(typeof action==='function'){
        action(dispatch, getState)
    }
    next(action)
}