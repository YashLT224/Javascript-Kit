class EventEmitter {
    constructor() {
        this.map = new Map();
    }

    subscribe(event, cb) {
        if (!this.map.has(event)) {
            this.map.set(event, []);
        }

        const arr = this.map.get(event);
        arr.push(cb);

        return {
            unsubscribe: () => {
                const index = arr.indexOf(cb);
                if (index !== -1) {
                    arr.splice(index, 1);
                }
            }
        };
    }

    emit(event, args = []) {
        const callbacks = this.map.get(event) || [];
        return callbacks.map(callback => callback(...args));
    }
}
