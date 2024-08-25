if (!document.getElementsByClassName) {
    document.getElementsByClassName = function(className) {
      const elements = [];
      const allElements = document.getElementsByTagName('*'); // Get all elements in the document
  
      for (let i = 0; i < allElements.length; i++) {
        const element = allElements[i];
        const classNames = element.className.split(' '); // Split class names by space
  
        if (classNames.indexOf(className) !== -1) {
          elements.push(element); // If the element has the target class, add it to the result array
        }
      }
  
      return elements;
    };
  }
  



  //way2

  let result=[];
  function getElementsByClassNames(className){

    function getChildren(node){
        Object.keys(node.children).forEach((child)=>{
            let childNode=node.children[child];
            let Attr= childNode.getAtribute('class');
            if(Attr&&Attr.indexOf(className)!==-1){
                result.push(ChildNode);
            
            }
            getChildren(ChildNode);
        })

    }

    let nodes=document.body;
    getChildren(nodes);
  }