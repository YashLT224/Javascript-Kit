if (!Promise.allSettled) {
    Promise.allSettled = function (promises) {
      return new Promise(resolve => {
        const results = [];
        let settledCount = 0;
        const totalPromises = promises.length;
  
        if (totalPromises === 0) {
          resolve(results);
          return;
        }
  
        promises.forEach((promise, index) => {
          Promise.resolve(promise)
            .then(value => {
              results[index] = { status: 'fulfilled', value };
            })
            .catch(reason => {
              results[index] = { status: 'rejected', reason };
            })
            .finally(() => {
              settledCount++;
              if (settledCount === totalPromises) {
                resolve(results);
              }
            });
        });
      });
    };
  }
  



// Example usage of Promise.allSettled
Promise.allSettled([Promise.resolve(1), Promise.reject('error'), Promise.resolve(3)])
  .then(results => console.log(results))  
  // [{status: "fulfilled", value: 1}, {status: "rejected", reason: "error"}, {status: "fulfilled", value: 3}]
