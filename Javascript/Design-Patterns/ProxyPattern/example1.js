const person = {
    name: "John Doe",
    age: 42,
    nationality: "American"
  };
  
  const personProxy = new Proxy(person, {
    get: (obj, prop) => {
      console.log(`The value of ${prop} is ${obj[prop]}`);
    },
    set: (obj, prop, value) => {
      console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
      obj[prop] = value;
      return true;
    }
  });
  
  personProxy.name;
  personProxy.age = 43;