class Calculator {
    
    constructor(value) {
        this.x = value;
    }

    add(value) {
        this.x += value;
        return this;
    }

    subtract(value) {
        this.x -= value;
        return this;
    }

    multiply(value) {
        this.x *= value;
        return this;
    }

    divide(value) {
        if (value === 0) {
            throw new Error('Division by zero is not allowed');
        }
        this.x /= value;
        return this;
    }

    power(value) {
        this.x **= value;
        return this;
    }

    getResult() {
        return this.x;
    }
}
