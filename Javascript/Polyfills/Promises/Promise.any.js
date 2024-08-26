if (!Promise.any) {
  Promise.any = function (promises) {
    return new Promise((resolve, reject) => {
      const errors = [];
      let rejectedCount = 0;
      const totalPromises = promises.length;

      if (totalPromises === 0) {
        reject(new AggregateError(errors, 'All promises were rejected'));
        return;
      }

      promises.forEach((promise, index) => {
        Promise.resolve(promise)
          .then(resolve)
          .catch(reason => {
            rejectedCount++;
            errors[index] = reason;
            if (rejectedCount === totalPromises) {
              reject(new AggregateError(errors, 'All promises were rejected'));
            }
          });
      });
    });
  };
}





// Example usage of Promise.any
Promise.any([Promise.reject('error1'), Promise.reject('error2'), Promise.resolve(3)])
  .then(result => console.log(result))  // 3
  .catch(error => console.error(error));  // AggregateError: All promises were rejected