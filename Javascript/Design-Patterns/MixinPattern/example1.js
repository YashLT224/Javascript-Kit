// A simple mixin that adds logging functionality
let loggerMixin = {
    log() {
        console.log(`${this.name} is logging something.`);
    }
};

// A class that uses the mixin
class User {
    constructor(name) {
        this.name = name;
    }
}

// Copy methods from loggerMixin to User's prototype
Object.assign(User.prototype, loggerMixin);

let user = new User('Alice');
user.log(); // Outputs: Alice is logging something.
