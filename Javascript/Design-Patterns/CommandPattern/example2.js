export class AddCommand {
    constructor(amount) {
        this.amount = amount
    }

    execute(value) {
        return value + this.amount
    }

    undo(value) {
        return value - this.amount
    }
}


export class SubtractCommand {
    constructor(amount) {
        this.amount = amount
    }

    execute(value) {
        return value - this.amount
    }

    undo(value) {
        return value + this.amount
    }
}


export class Calculator {
    constructor() {
        this.currentValue = 0
        this.commands = []
    }

    execute(command) {
        this.currentValue = command.execute(this.currentValue)
        this.commands.push(command)
    }

    undo() {
        let command = this.commands.pop()
        this.currentValue = command.undo(this.currentValue)
    }
}




import { AddCommand } from "./AddCommand.js";
import { Calculator } from "./Calculator.js";
import { SubtractCommand } from "./SubtractCommand.js";


let calculator = new Calculator()

calculator.execute(new AddCommand(3))
console.log(calculator.currentValue)

calculator.execute(new AddCommand(5))
console.log(calculator.currentValue)

calculator.execute(new SubtractCommand(1))
console.log(calculator.currentValue)

calculator.undo()
console.log(calculator.currentValue)

calculator.undo()
console.log(calculator.currentValue)