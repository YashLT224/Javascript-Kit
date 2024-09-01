import React, { useState, useEffect } from 'react';

 

const withEnhancement = (BaseComponent) => {
    return function EnhancedComponent(props) {
      const [count, setCount] = useState(0);
   
      useEffect(() => {
        // Perform side effects here
      }, [count]);
   
      return (
        <BaseComponent {...props} enhancedProp="someValue" />
      );
    };
   };

   const EnhancedComponent = withEnhancement(BaseComponent);




   function App() {
    return (
      <div>
        <EnhancedComponent prop1="value1" prop2="value2" />
      </div>
    );
   }