https://learnersbucket.com/examples/interview/execute-async-functions-in-parallel-javascript/


const asyncParallelExecuter = async function(promises) {
    // Create an array of promises that execute immediately and handle them as they resolve
    const executionPromises = promises.map(promise => 
      promise().then(result => console.log(result)).catch(e => console.log(e))
    );
  
    // Await all promises to ensure all have been processed
    await Promise.all(executionPromises);
  }
  
  const asyncTask = function(i) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(`Completing ${i}`), 1000 * i);
    });
  }
  
  const promises = [
    () => asyncTask(3),
    () => asyncTask(1),
    () => asyncTask(7),
    () => asyncTask(2),
    () => asyncTask(5),
  ];
  
  asyncParallelExecuter(promises);
  
  /* Expected Output (order may vary):
    "Completing 1" (after 1 second)
    "Completing 2" (after 2 seconds)
    "Completing 3" (after 3 seconds)
    "Completing 5" (after 5 seconds)
    "Completing 7" (after 7 seconds)
  */










function asyncParallel(tasks, callback) {
  // store the result
  const results = [];

  const errors = [];

  // track the task executed
  let tasksCompleted = 0;

  // run each task
  tasks.forEach((asyncTask) => {
    // invoke the async task
    // it can be a promise as well
    // for a promise you can chain it with then
    asyncTask
      .then((value) => {
        // store the output of the task
        results.push(value);
      })
      .catch((error) => {
        errors.push(error);
      })
      .finally(() => {
        // increment the tracker
        tasksCompleted++;

        // if all tasks are executed
        // invoke the callback
        if (tasksCompleted >= tasks.length) {
          callback(errors, results);
        }
      });
  });
};

      function createAsyncTask() {
        const value = Math.floor(Math.random() * 10);
        return function(callback) {
          setTimeout(() => {
            callback(value);
          }, value * 1000);
        };
      }



      Input:
const taskList = [
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask()
];

asyncParallel(taskList, result => {
  console.log('results', result);
});

Output:
"results" // [object Array] (6)
[1,6,7,7,9,9]
