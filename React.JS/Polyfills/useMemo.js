import {useRef,useEffect} from 'react';

const areEqual=(prevDeps,nextDeps)=>{

    if(prevDeps===null)return false;
    if(prevDeps.length!==nextDeps.length)return false;

    for(let i=0;i<prevDeps.length;i++){
         if(prevDeps[i]!==nextDeps[i]){
            return false;
         }
    }
    return true;
}

const useCustomMemo=(cb,deps)=>{
    const memoisedRef=useRef(null);
    if(!memoisedRef.current||!areEqual(memoisedRef.current.deps,deps)){
        memoisedRef.current={
            value:cb(),
            deps
        }
    }

useEffect(()=>{
return ()=>memoisedRef.current=null;
},[])

    return memoisedRef.curent.value;
}