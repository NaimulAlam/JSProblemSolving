const Employee = function (name) {
  this.name = name;
};

Employee.prototype.getName = function () {
  return this.name;
};

Employee.prototype.getNameLength = function () {
  return this.name.length;
};

const PermanetEmployee = function (annaulSalary) {
  this.annaulSalary = annaulSalary;
};

// reation with the new object that inherits from Employee
var employee = new Employee("John");
PermanetEmployee.prototype = employee;

var pe = new PermanetEmployee(5000);

console.log(pe.getName());
console.log(pe instanceof PermanetEmployee);
console.log(pe.getNameLength());
console.log("employee.name :", employee.hasOwnProperty("name"));
console.log("PermanentEmployee.annulSalary :", pe.hasOwnProperty("annaulSalary"));

/* 
Objective

In this challenge, we practice implementing inheritance and use JavaScript prototypes to add a new method to an existing prototype. Check out the attached Classes tutorial to refresh what we've learned about these topics.

Task

We provide the implementation for a Rectangle class in the editor. Perform the following tasks:

Add an area method to Rectangle's prototype.
Create a Square class that satisfies the following:
It is a subclass of Rectangle.
It contains a constructor and no other methods.
It can use the Rectangle class' area method to print the area of a Square object.
Locked code in the editor tests the class and method implementations and prints the area values to STDOUT.
*/