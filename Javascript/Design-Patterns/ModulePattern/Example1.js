const MyModule = (function () {
    // Private variables and functions
    let privateVar = 42;
  
    function privateFunction() {
      return privateVar;
    }
  
    // Public API
    return {
      getVar: function () {
        return privateVar;
      },
      setVar: function (value) {
        privateVar = value;
      },
    };
  })();
  
  console.log(MyModule.getVar()); // 42
  MyModule.setVar(100);
  console.log(MyModule.getVar()); // 100        