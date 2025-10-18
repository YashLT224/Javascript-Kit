const myPromise=new Promise((resolve,reject)=>{
    const success=true;
    setTimeout(()=>{
        if(success){
            resolve('Operation was successfull');
        }
        else{
            reject('Operation was failed')
        }
    },2000)
});

myPromise
  .then((result) => {
    console.log(result); // This will run if the promise is resolved
    // Output: 'Operation was successful!'
  })
  .catch((error) => {
    console.error(error); // This will run if the promise is rejected
    // Output: 'Operation failed!'
  })
  .finally(() => {
    console.log('This will run regardless of the promise outcome.');
    // Output: 'This will run regardless of the promise outcome.'
  });
