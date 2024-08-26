https://learnersbucket.com/examples/interview/execute-async-functions-in-series/

const asyncSeriesExecuter = async function(promises) {
    for (let promise of promises) {
      try{
        const result = await promise;
        console.log(result);
      }catch(e){
        console.log(e);
      }
    }
  }



  Input:
const asyncTask = function(i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Completing ${i}`), 100*i)
  });
}

const promises = [
  asyncTask(3),
  asyncTask(1),
  asyncTask(7),
  asyncTask(2),
  asyncTask(5),
];

asyncSeriesExecuter(promises);

Output:
"Completing 3"
"Completing 1"
"Completing 7"
"Completing 2"
"Completing 5"










//another concept
const asyncSeriesExecuter = async function(promises) {
    for (let promise of promises) {
      try {
        const result = await promise();
        console.log(result);
      } catch(e) {
        console.log(e);
      }
    }
  }
  
  const asyncTask = function(i) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(`Completing ${i}`), 1000 * i);
    });
  }
  
  //The reason for using callbacks (i.e., functions that return promises) in this context is to control when each promise is created and executed.
  const promises = [
    () => asyncTask(3),
    () => asyncTask(1),
    () => asyncTask(7),
    () => asyncTask(2),
    () => asyncTask(5),
  ];
  
  asyncSeriesExecuter(promises);
  
  /* Expected Output:
    "Completing 3" (after 3 seconds)
    "Completing 1" (after 1 second)
    "Completing 7" (after 7 seconds)
    "Completing 2" (after 2 seconds)
    "Completing 5" (after 5 seconds)
  */
  


    /*diff btw both approcahes
    The reason for using callbacks (i.e., functions that return promises) in this context is to control when each promise is created and executed.

    Why Use Callbacks?
    Why Use Callbacks?
    Delayed Execution:
    
    When you pass a function like () => asyncTask(3) instead of the promise itself, the promise inside asyncTask(3) is not immediately created and executed. Instead, it is only created and executed when you explicitly call the function.
    This allows you to manage the exact timing of when each task starts. In your case, this is crucial because you want each task to start only after the previous one has completed.
    Sequential Execution:
    
    If you passed the promises directly (e.g., asyncTask(3)), they would all start executing immediately and in parallel. This is because JavaScript will evaluate the function call immediately when the array is created.
    By using a callback (a function that returns a promise), you can ensure that the promise is only created and starts executing when you call that function in sequence, which aligns with your goal of running these tasks one after the other



    Without Callbacks:
If you didn't use callbacks and passed the promises directly, like this:
const promises = [
    asyncTask(3),
    asyncTask(1),
    asyncTask(7),
    asyncTask(2),
    asyncTask(5),
  ];
  All the asyncTask functions would start their timers at the same time, even though you are trying to control the sequence. The setTimeout delays would overlap, leading to non-sequential execution of the tasks.
  With Callbacks:
  When you use callbacks like this:
  
  javascript
  Copy code
  const promises = [
    () => asyncTask(3),
    () => asyncTask(1),
    () => asyncTask(7),
    () => asyncTask(2),
    () => asyncTask(5),
  ];
  Each asyncTask is only invoked when its corresponding function is called inside the asyncSeriesExecuter. This ensures that each task waits for the previous one to complete before starting its own execution.
  Key Points:
  Control: Callbacks allow you to control exactly when each promise is created and executed.
  Sequential Execution: Using callbacks ensures that promises are executed one after the other, maintaining the desired sequence.
  Preventing Overlap: By delaying the creation of each promise, you prevent the setTimeout functions from overlapping, ensuring that each task executes only after the previous one has fully completed.
  Example Recap:
  javascript
  Copy code
  const promises = [
    () => asyncTask(3),
    () => asyncTask(1),
    () => asyncTask(7),
    () => asyncTask(2),
    () => asyncTask(5),
  ];
  
  asyncSeriesExecuter(promises);
  This approach ensures that each asyncTask is executed in order: first 3 seconds, then 1 second, then 7 seconds, etc.
  The tasks are executed sequentially, respecting their respective delays, and ensuring that they don't overlap or run in parallel.
  */
  
  
  
  
    