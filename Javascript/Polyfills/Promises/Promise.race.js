if (!Promise.race) {
    Promise.race = function (promises) {
      return new Promise((resolve, reject) => {
        promises.forEach(promise => {
          Promise.resolve(promise).then(resolve).catch(reject);
        });
      });
    };
  }
 
  

  // Example usage of Promise.race
Promise.race([Promise.resolve(1), new Promise(resolve => setTimeout(resolve, 1000))])
.then(result => console.log(result))  // 1
.catch(error => console.error(error));
