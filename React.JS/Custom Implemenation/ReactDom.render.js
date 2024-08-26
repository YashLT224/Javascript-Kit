//index.html
<div id="root"></div>



//index.js
const dom = {
    type: 'div',
    props: { id: 'abc' },
    children: [{ type: 'h1', children: 'HELLO' }]
  };
  
  
  const generateDOM = (domObj, entry) => {
    const helper = (obj) => {
      const { type, props, children } = obj;
      
      const el = document.createElement(type);
      
      if(props){
        for(let property in props){
          el[property] = props[property];
        }
      }
      
      if(typeof children === 'string'){
        el.innerText = children;
      }else{
        const fragment = document.createDocumentFragment();
        
        for(let child of children){
          fragment.appendChild(helper(child));
        }
        
        el.appendChild(fragment);
      }
      
      return el;
    };
    
    const generatedDom = helper(domObj);
    entry.appendChild(generatedDom);
  }
  
  
  const entry = document.getElementById('root');
  generateDOM(dom, entry);