if (!window.setInterval) {
    window.setInterval = function (callback, delay) {
        let intervalId = {};
        let isRunning = false;

        // The recursive function to simulate the repeated execution
        function execute() {
            if (!isRunning) return;
            callback();
            intervalId = setTimeout(execute, delay); // Recursively call itself
        }

        // Start the interval
        isRunning = true;
        intervalId = setTimeout(execute, delay); // Initial call

        // Return an object that can be used to clear the interval
        return {
            cancel: function () {
                clearTimeout(intervalId); // Stop the interval by clearing the timeout
                isRunning = false;
            }
        };
    };
}





//way2
function createIntervalPolyfill() {
    let intervalId = 0;
    let IntervalMap = {};
    function setIntervalPolyfill(cb, delay) {
        var id = ++intervalId;

        function repeat() {
            intervalMap[id] = setTimeout(() => {
                cb();
                if (intervalMap[id]) {
                    repeat();
                }
            }, delay)

        }
        repeat();
        return id;

    }

    function clearIntervalPolyfill(intervalId){
        clearTimeout(intervalId);
        delete intervalMap[intervalId];
    }

    return {clearIntervalPolyfill,createIntervalPolyfill}
}