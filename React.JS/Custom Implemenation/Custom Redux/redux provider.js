import {createContext} from 'react'

const storeContext= createContext();


export default function Provider({children,store}){
    const [state,setState]=useState(store.getState())

    useEffect(()=>{
        store.subscribe(()=>{
            setState(store.getState())
        })
    },[])


    return <store.Provider value={{state, dispatch:store.dispatch}}>
      {  children}
    </store.Provider>
}


export const useDispatch=()=>{
    const store= useContext(storeContext);
return store.dispatch;
}


export const useSelector=(selector)=>{
    const store= useContext(storeContext);
return selector(store.state)
}