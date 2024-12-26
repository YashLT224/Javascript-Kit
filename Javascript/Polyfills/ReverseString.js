String.prototype.reverse = function() {
    let reversed = '';
    for(let i = this.length - 1; i >= 0; i--) {
        reversed += this[i];
    }
    return reversed;
}


// Usage:
const str = "hello";
console.log(str.reverse()); // "olleh"
