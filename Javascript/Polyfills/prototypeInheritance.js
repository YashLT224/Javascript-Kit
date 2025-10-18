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
s1.definition(). //guntua-20-A1