var Singleton = (function () {
    var instance;

    function createInstance() {
        // Singleton logic here
        var object = new Object("I am the instance");
        return object;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

var instance1 = Singleton.getInstance();
var instance2 = Singleton.getInstance();

console.log(instance1 === instance2); // Output: true.  

//thats why both instances are true here
// this example, the getInstance method checks if an instance of the Singleton already exists. If it does, it returns that instance. If it doesn’t, it creates a new instance and returns it.