class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);
    }

    emit(eventName, ...args) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(cb => cb(...args));
        }
    }

    off(eventName, callback) {
        if (this.events[eventName]) {
            this.events[eventName] = this.events[eventName].filter(cb => cb !== callback);
        }
    }

    once(eventName, callback) {
        const onceWrapper = (...args) => {
            callback(...args);
            this.off(eventName, onceWrapper);
        };
        this.on(eventName, onceWrapper);
    }
}

// Example usage:
const emitter = new EventEmitter();

const greet = (name) => console.log(`Hello ${name}`);
emitter.on('greet', greet);
emitter.emit('greet', 'Bob');  // Hello Bob

emitter.off('greet', greet);
emitter.emit('greet', 'Alice'); // No output






//Example 1: Simple EventEmitter Demo in Node.js

//Create two files:

//🔹 emitter.js
// emitter.js
const EventEmitter = require('events');
const emittter = new EventEmitter();

// Export the emitter so others can listen to it
module.exports = emitter;

// Emit an event after 2 seconds
setTimeout(() => {
    console.log("🔊 Emitting 'greet' event...");
    emittter.emit('greet', 'Alice');
}, 2000);

//🔹 listener.js
// listener.js
const emittter = require('./emitter');

// Listen for the event
emittter.on('greet', (name) => {
    console.log(`👋 Hello, ${name}!`);
});

//🔹 Run it
//node listener.js


//🟢 Output:

//🔊 Emitting 'greet' event...
//👋 Hello, Alice!


//✅ What’s happening:

//listener.js imports the same EventEmitter instance from emitter.js.

//It listens for "greet" events.

//When emitter.js emits "greet", the listener reacts immediately — even though it’s in another file.