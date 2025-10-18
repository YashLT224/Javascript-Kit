function Person(name,age){
    this.name=name;
    this.age=age;
}
Person.prototype.greet = function() {
    console.log(this.name + " - " + this.age);  //yash - 24
}

let p1=new Person('yash',24)
p1.greet();


function Student(name,age,grade){
    Person.call(this,name,age);
    this.grade=grade
}

Student.prototype=Object.create(Person.prototype)
Student.constructor=Student;


Student.prototype.definition=function(){
    console.log(this.name+"-"+this.age+'-'+this.grade);
}

let s1= new Student('guntua',20,'A1')
s1.greet() //guntua - 20
s1.definition() //guntua-20-A1


//Prototype inheritance refers to the mechanism by which an object inherits properties and methods from another object, usually through the prototype of a constructor function or a class. It is a way to share properties and methods across multiple instances of an object.
//When a constructor function or class is used to create an object, that object inherits properties and methods from the constructor function’s prototype.
//Key Points:
//Inheritance of properties and methods: When you define methods on a constructor's prototype, all instances created by that constructor can access those methods.
//Common use: Prototype inheritance is often used to create methods that can be shared by all instances of a given type (constructor function or class).