// https://learnersbucket.com/examples/interview/retry-promises-n-number-of-times-in-javascript/
//Implement a function in JavaScript that retries promises N number of times with a delay between each call.

// Input:
// retry(asyncFn, retries = 3, delay = 50, finalError = 'Failed');

// Output:
// ... attempt 1 -> failed
// ... attempt 2 -> retry after 50ms -> failed
// ... attempt 3 -> retry after 50ms -> failed
// ... Failed.


//Using then…catch.

//delay func
const wait = ms => new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
  const retryWithDelay = (
    operation, retries = 3, 
    delay = 50, finalErr = 'Retry failed') => new Promise((resolve, reject) => {
    return operation()
      .then(resolve)
      .catch((reason) => {
        //if retries are left
        if (retries > 0) {
          //delay the next call
          return wait(delay)
            //recursively call the same function to retry with max retries - 1
            .then(retryWithDelay.bind(null, operation, retries - 1, delay, finalErr))
            .then(resolve)
            .catch(reject);
        }
        
        // throw final error
        return reject(finalErr);
      });
  });

  Input:
// Test function
const getTestFunc = () => {
  let callCounter = 0;
  return async () => {
    callCounter += 1;
    // if called less than 5 times
    // throw error
    if (callCounter < 5) {
      throw new Error('Not yet');
    }
  }
}

// Test the code
const test = async () => {
  await retryWithDelay(getTestFunc(), 10);
  console.log('success');
  await retryWithDelay(getTestFunc(), 3);
  console.log('will fail before getting here');
}

// Print the result
test().catch(console.error);

Output:
"success" // 1st test
"Retry failed" //2nd test








Using async…await.
const retryWithDelay = async (
    fn, retries = 3, interval = 50,
    finalErr = 'Retry failed'
  ) => {
    try {
      // try
      await fn();
    } catch (err) {
      // if no retries left
      // throw error
      if (retries <= 0) {
        return Promise.reject(finalErr);
      }
      
      //delay the next call
      await wait(interval);
      
      //recursively call the same func
      return retryWithDelay(fn, (retries - 1), interval, finalErr);
    }
  }


  Input:
// Test function
const getTestFunc = () => {
  let callCounter = 0;
  return async () => {
    callCounter += 1;
    // if called less than 5 times
    // throw error
    if (callCounter < 5) {
      throw new Error('Not yet');
    }
  }
}

// Test the code
const test = async () => {
  await retryWithDelay(getTestFunc(), 10);
  console.log('success');
  await retryWithDelay(getTestFunc(), 3);
  console.log('will fail before getting here');
}

// Print the result
test().catch(console.error);

Output:
"success" // 1st test
"Retry failed" //2nd test