class Vehicle {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
  
    getDetails() {
      return `${this.make} ${this.model}`;
    }
  }
  
  class Car extends Vehicle {
    constructor(make, model) {
      super(make, model);
      this.type = 'car';
    }
  }
  
  class Truck extends Vehicle {
    constructor(make, model) {
      super(make, model);
      this.type = 'truck';
    }
  }
  
  class VehicleFactory {
    createVehicle(make, model, type) {
      switch (type) {
        case 'car':
          return new Car(make, model);
        case 'truck':
          return new Truck(make, model);
        default:
          throw new Error(`Invalid vehicle type: ${type}`);
      }
    }
  }
  
  const factory = new VehicleFactory();
  const car = factory.createVehicle('Toyota', 'Camry', 'car');
  const truck = factory.createVehicle('Ford', 'F-150', 'truck');
  
  console.log(car.getDetails()); // Toyota Camry
  console.log(truck.getDetails()); // Ford F-150        