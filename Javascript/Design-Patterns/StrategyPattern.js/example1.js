
export class Strategy1 {
    performAction() {
        console.log('Strategy 1')
    }
}


export class Strategy2 {
    performAction() {
        console.log('Strategy 2')
    }
}

export class StrategyManager {
    setStrategy(strategy) {
        this.strategy = strategy
    }

    performAction() {
        this.strategy.performAction()
    }
}

let strategyManager = new StrategyManager()

strategyManager.setStrategy(new Strategy1())
strategyManager.performAction()


strategyManager.setStrategy(new Strategy2())
strategyManager.performAction()