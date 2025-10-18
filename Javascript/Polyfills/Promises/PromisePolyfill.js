 //. https://medium.com/@manojsingh047/polyfill-for-javascript-promise-81053b284e37



//by function constructor

function MyPromise(executor) {
    let onResolve;
    let onReject;
    let isCalled = false;  //indicates callback hasbeen called

    let isFulfilled = false;
    let isRejected = false;
    let value;
    let error;




     this.then = function (thenHandler) {
    onResolve = thenHandler;

    // Call the handler immediately if the promise is already fulfilled
    if (!isCalled && isFulfilled) {
      onResolve(value);
      isCalled = true;
    }

    // Chaining: return the current promise to allow for further `then` calls
    return this;
  }

    this.catch = function (catchHandler) {
        onReject = catchHandler;
        if (!isCalled && isRejected) {
            onReject(error);
            isRejected = true;
        }
        return this;
    }


    function resolve(val) {
         if (isFulfilled || isRejected) return;
        isFulfilled = true;
        value = val;
        if (typeof onResolve === 'function' && !isCalled) {
            onResolve(val);
            isCalled = true;
        }


    }
    function reject(err) {
        isRejected = true;
        error = err;
        if (typeof onReject === 'function' && !isCalled) {
            onReject(err);
            isCalled = true
        }

    }

    try {
        executor(resolve, reject);
    }
    catch (e) {
        reject(e)
    }

}





const customPromise= new MyPromise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('1234')
    },1000);
})
customPromise.then((val)=>{
    console.log('resolve',val);
    return val;
})
.then((v)=>{
    console.log(v);
})
.catch((er)=>{
    console.log('reject',er);
})








//another approach which supports .then chaining as well

function MyPromise(executor) {
  let state = 'pending'; // pending, fulfilled, rejected
  let value = undefined;
  let handlers = [];
  
  function resolve(result) {
    if (state !== 'pending') return;
    state = 'fulfilled';
    value = result;
    handlers.forEach(handle);
  }
  
  function reject(error) {
    if (state !== 'pending') return;
    state = 'rejected';
    value = error;
    handlers.forEach(handle);
  }
  
  function handle(handler) {
    if (state === 'pending') {
      handlers.push(handler);
    } else if (state === 'fulfilled') {
      if (handler.onFulfilled) {
        handler.onFulfilled(value);
      }
    } else if (state === 'rejected') {
      if (handler.onRejected) {
        handler.onRejected(value);
      }
    }
  }
  
  this.then = function(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      handle({
        onFulfilled: function(result) {
          if (!onFulfilled) {
            resolve(result);
            return;
          }
          try {
            const returnValue = onFulfilled(result);
            if (returnValue instanceof MyPromise) {
              returnValue.then(resolve, reject);
            } else {
              resolve(returnValue);
            }
          } catch (err) {
            reject(err);
          }
        },
        onRejected: function(error) {
          if (!onRejected) {
            reject(error);
            return;
          }
          try {
            const returnValue = onRejected(error);
            if (returnValue instanceof MyPromise) {
              returnValue.then(resolve, reject);
            } else {
              resolve(returnValue);
            }
          } catch (err) {
            reject(err);
          }
        }
      });
    });
  };
  
  this.catch = function(onRejected) {
    return this.then(null, onRejected);
  };
  
  try {
    executor(resolve, reject);
  } catch (err) {
    reject(err);
  }
}