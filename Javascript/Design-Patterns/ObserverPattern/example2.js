class Subject {
    constructor() {
      this.observers = [];
    }
  
    addObserver(observer) {
      this.observers.push(observer);
    }
  
    notify() {
      this.observers.forEach(observer => observer.update());
    }
  }
  
  class Observer {
    update() {
      // Handle the update logic
    }
  }
  
  const subject = new Subject();
  const observer1 = new Observer();
  const observer2 = new Observer();
  
  subject.addObserver(observer1);
  subject.addObserver(observer2);
  
  subject.notify(); // Notifies all observers        