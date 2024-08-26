if (!Promise.all) {
    Promise.all = function (promises) {
      return new Promise((resolve, reject) => {
        let resolvedCount = 0;
        const results = [];
        const totalPromises = promises.length;
  
        if (totalPromises === 0) {
          resolve(results);
          return;
        }
  
        promises.forEach((promise, index) => {
          Promise.resolve(promise).then(value => {
            resolvedCount++;
            results[index] = value;
            if (resolvedCount === totalPromises) {
              resolve(results);
            }
          }).catch(error => {
            reject(error);
          });
        });
      });
    };
  }

  // Example usage of Promise.all
Promise.all([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)])
.then(results => console.log(results))  // [1, 2, 3]
.catch(error => console.error(error));
