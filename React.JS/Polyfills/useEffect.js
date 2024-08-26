import {useRef} from 'react';

const useCustomEffect=(efect,deps)=>{
    const isFirstRender=useRef(true);
    const prevDeps=useRef([]);

    //first render
    if(isFirstRender.current){
        isFirstRender.current=false;
        effect();
        const cleanup=effect();
        if(cleanup && typeof cleanup==='function'){
            cleanup();
        }
    }

    //no deps and deps change
    const depsChanged=deps?JSON.stringify(prevDeps.current)!==JSON.stringify(deps):true;
    if(depsChanged){
        const cleanup=effect();
        if(cleanup && typeof cleanup==='function'&&deps){
            cleanup();
        }
    }
    prevDeps.cuurent=deps||[];
}


export default useCustomEffect;