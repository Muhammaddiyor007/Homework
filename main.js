// 1. Rectangle nomli class yarating:
// class Rectangle {
//     constructor(width, height) {
//         this._width = width;
//         this._height = height;
//     }

//     getWidth() {
//         return this._width;
//     }

//     getHeight() {
//         return this._height;
//     }

//     setSides(a, b) {
//         this._width = a;
//         this._height = b;
//     }

//     perimeter() {
//         return 2 * (this._width + this._height);
//     }

//     area() {
//         return this._width * this._height;
//     }
// }

// const myRectangle = new Rectangle(5, 8);

// console.log("Width:", myRectangle.getWidth());
// console.log("Height:", myRectangle.getHeight());

// myRectangle.setSides(3, 6);

// console.log("Perimeter:", myRectangle.perimeter());
// console.log("Area:", myRectangle.area());

//2. Employee nomli class yarating:
// class Employee {
//     constructor(id, firstName, lastName, salary) {
//         this._id = id;
//         this._firstName = firstName;
//         this._lastName = lastName;
//         this._salary = salary;
//     }

//     getId() {
//         return this._id;
//     }

//     getFirstName() {
//         return this._firstName;
//     }

//     getLastName() {
//         return this._lastName;
//     }

//     getSalary() {
//         return this._salary;
//     }

//     setId(id) {
//         this._id = id;
//     }

//     setFirstName(fName) {
//         this._firstName = fName;
//     }

//     setLastName(lName) {
//         this._lastName = lName;
//     }

//     setSalary(s) {
//         this._salary = s;
//     }

//     getFullName() {
//         return `${this._firstName} ${this._lastName}`;
//     }

//     getAnnualSalary() {
//         return this._salary * 12;
//     }

//     raiseSalary(percent) {
//         this._salary *= (1 + percent / 100);
//     }
// }

// const employee1 = new Employee(1, 'John', 'Doe', 50000);

// console.log("Current Salary:", employee1.getSalary());

// employee1.raiseSalary(10);
// console.log("New Salary:", employee1.getSalary());

// console.log("Full Name:", employee1.getFullName());
// console.log("Annual Salary:", employee1.getAnnualSalary())


//3. CustomDate nomli class yarating:
// class DateInfo {
//     constructor(day, month, year) {
//         this._day = day;
//         this._month = month;
//         this._year = year;
//     }

//     getDay() {
//         return this._day;
//     }

//     getMonth() {
//         return this._month;
//     }

//     getYear() {
//         return this._year;
//     }

//     setDay(day) {
//         this._day = day;
//     }

//     setMonth(month) {
//         this._month = month;
//     }

//     setYear(year) {
//         this._year = year;
//     }

//     getISOdate() {
//         const paddedDay = this._day < 10 ? `0${this._day}` : this._day;
//         const paddedMonth = this._month < 10 ? `0${this._month}` : this._month;

//         return `${paddedDay}-${paddedMonth}-${this._year}`;
//     }
// }

// // Example usage:
// const dateInfo = new DateInfo(12, 5, 2023);

// console.log("Current ISO Date:", dateInfo.getISOdate());

// // Update date
// dateInfo.setDay(15);
// dateInfo.setMonth(10);
// dateInfo.setYear(2024);

// console.log("Updated ISO Date:", dateInfo.getISOdate());


//4. Time nomli class yarating:
// class Time {
//     constructor(hour, minute, second) {
//         this._hour = hour;
//         this._minute = minute;
//         this._second = second;
//     }

//     getHour() {
//         return this._hour;
//     }

//     getMinute() {
//         return this._minute;
//     }

//     getSecond() {
//         return this._second;
//     }

//     setHour(hour) {
//         this._hour = hour;
//     }

//     setMinute(minute) {
//         this._minute = minute;
//     }

//     setSecond(second) {
//         this._second = second;
//     }

//     nextSecond() {
//         this._second = (this._second + 1) % 60;
//         if (this._second === 0) {
//             this._minute = (this._minute + 1) % 60;
//             if (this._minute === 0) {
//                 this._hour = (this._hour + 1) % 24;
//             }
//         }
//     }

//     previousSecond() {
//         this._second = (this._second - 1 + 60) % 60;
//         if (this._second === 59) {
//             this._minute = (this._minute - 1 + 60) % 60;
//             if (this._minute === 59) {
//                 this._hour = (this._hour - 1 + 24) % 24;
//             }
//         }
//     }
// }

// const time = new Time(6, 20, 10);

// console.log("Current Time:", `${time.getHour()}:${time.getMinute()}:${time.getSecond()}`);

// time.nextSecond();
// console.log("Next Second:", `${time.getHour()}:${time.getMinute()}:${time.getSecond()}`);

// time.previousSecond();
// console.log("Previous Second:", `${time.getHour()}:${time.getMinute()}:${time.getSecond()}`);


//5. Superclass Shape -> sub classes (Circle, Rectangle)
// class Shape {
//     constructor(color, filled) {
//         this._color = color;
//         this._filled = filled;
//     }

//     getColor() {
//         return this._color;
//     }

//     setColor(color) {
//         this._color = color;
//     }

//     isFilled() {
//         return this._filled;
//     }

//     setFilled(filled) {
//         this._filled = filled;
//     }
// }

// class Circle extends Shape {
//     constructor(color, filled, radius) {
//         super(color, filled);
//         this._radius = radius;
//     }

//     getRadius() {
//         return this._radius;
//     }

//     setRadius(radius) {
//         this._radius = radius;
//     }

//     getArea() {
//         return Math.PI * this._radius * this._radius;
//     }

//     getPerimeter() {
//         return 2 * Math.PI * this._radius;
//     }
// }

// class Rectangle extends Shape {
//     constructor(color, filled, width, height) {
//         super(color, filled);
//         this._width = width;
//         this._height = height;
//     }

//     getWidth() {
//         return this._width;
//     }

//     setWidth(width) {
//         this._width = width;
//     }

//     getHeight() {
//         return this._height;
//     }

//     setHeight(height) {
//         this._height = height;
//     }

//     getArea() {
//         return this._width * this._height;
//     }

//     getPerimeter() {
//         return 2 * (this._width + this._height);
//     }
// }

// const circle = new Circle("Red", true, 5);
// console.log("Circle Area:", circle.getArea());
// console.log("Circle Perimeter:", circle.getPerimeter());

// const rectangle = new Rectangle("Blue", false, 4, 6);
// console.log("Rectangle Area:", rectangle.getArea());
// console.log("Rectangle Perimeter:", rectangle.getPerimeter());


//6. Person - superclass, Student and Employee - subclasses;
// Person -> Student and Employee

// class Person {
//     constructor(name, address) {
//         this._name = name;
//         this._address = address;
//     }

//     getName() {
//         return this._name;
//     }

//     setName(name) {
//         this._name = name;
//     }

//     getAddress() {
//         return this._address;
//     }

//     setAddress(address) {
//         this._address = address;
//     }
// }

// class Student extends Person {
//     constructor(name, address, faculty, year, university) {
//         super(name, address);
//         this._faculty = faculty;
//         this._year = year;
//         this._university = university;
//     }

//     getFaculty() {
//         return this._faculty;
//     }

//     getYear() {
//         return this._year;
//     }

//     getUniversity() {
//         return this._university;
//     }

//     setFaculty(faculty) {
//         this._faculty = faculty;
//     }

//     setYear(year) {
//         this._year = year;
//     }

//     setUniversity(university) {
//         this._university = university;
//     }
// }

// class Employee extends Person {
//     constructor(name, address, salary, work) {
//         super(name, address);
//         this._salary = salary;
//         this._work = work;
//     }

//     getSalary() {
//         return this._salary;
//     }

//     getWork() {
//         return this._work;
//     }

//     setSalary(salary) {
//         this._salary = salary;
//     }

//     setWork(work) {
//         this._work = work;
//     }
// }

// const student = new Student("John Doe", "123 Main St", "Engineering", 2, "XYZ University");
// console.log("Student Name:", student.getName());
// console.log("Student Faculty:", student.getFaculty());

// const employee = new Employee("Jane Smith", "456 Oak St", 50000, "Software Developer");
// console.log("Employee Name:", employee.getName());
// console.log("Employee Salary:", employee.getSalary());

//7. Animal - superclass, others - subclasses
// class Animal {
//     constructor(name, speed, weight) {
//         this.name = name;
//         this.speed = speed;
//         this.weight = weight;
//     }
// }

// class Mammal extends Animal {
//     constructor(name, speed, weight, legs) {
//         super(name, speed, weight);
//         this._legs = legs;
//     }

//     getLegs() {
//         return this._legs;
//     }

//     setLegs(legs) {
//         this._legs = legs;
//     }
// }

// class Cat extends Mammal {
//     getSound() {
//         return "Meow";
//     }
// }

// class Dog extends Mammal {
//     getSound() {
//         return "Woof";
//     }
// }

// class Fish extends Animal {
//     constructor(name, speed, weight, size) {
//         super(name, speed, weight);
//         this._size = size;
//     }

//     getSize() {
//         return this._size;
//     }

//     setSize(size) {
//         this._size = size;
//     }
// }

// class Whale extends Fish {
//     getSound() {
//         return "Poof";
//     }
// }

// class Shark extends Fish {
//     getSound() {
//         return "Sheef";
//     }
// }

// // Example usage:
// const cat = new Cat("Fluffy", 10, 5, 4);
// console.log("Cat Legs:", cat.getLegs());
// console.log("Cat Sound:", cat.getSound());

// const shark = new Shark("Jaws", 25, 1000, "Large");
// console.log("Shark Size:", shark.getSize());
// console.log("Shark Sound:", shark.getSound());


//8. Quyidagi static metodlarni yarating:


// Object
// class CustomObjectUtils {
//     static customKeys(obj) {
//         return Object.keys(obj);
//     }

//     static customValues(obj) {
//         return Object.values(obj);
//     }

//     static customEntries(obj) {
//         return Object.entries(obj);
//     }
// }

// // Example usage for Object methods:
// const sampleObject = { a: 1, b: 2, c: 3 };
// console.log("Custom Keys:", CustomObjectUtils.customKeys(sampleObject));
// console.log("Custom Values:", CustomObjectUtils.customValues(sampleObject));
// console.log("Custom Entries:", CustomObjectUtils.customEntries(sampleObject));

//Number
// class CustomNumberUtils {
//     static customIsInteger(value) {
//         return Number.isInteger(value);
//     }
// }

// // Example usage for Number method:
// const integerValue = 42;
// const floatValue = 42.5;

// console.log("Is Integer:", CustomNumberUtils.customIsInteger(integerValue)); // true
// console.log("Is Integer:", CustomNumberUtils.customIsInteger(floatValue)); // false

//Array
// class CustomArrayUtils {
//     static customIsArray(value) {
//         return Array.isArray(value);
//     }
// }

// // Example usage for Array method:
// const arrayValue = [1, 2, 3];
// const nonArrayValue = "Not an array";

// console.log("Is Array:", CustomArrayUtils.customIsArray(arrayValue)); // true
// console.log("Is Array:", CustomArrayUtils.customIsArray(nonArrayValue)); // false

//9.Array classiga quyidagi static metodlarni qo’shing;
// class CustomObjectUtils {
//     static customKeys(obj) {
//         return Object.keys(obj);
//     }

//     static customValues(obj) {
//         return Object.values(obj);
//     }

//     static customEntries(obj) {
//         return Object.entries(obj);
//     }
// }

// class CustomNumberUtils {
//     static customIsInteger(value) {
//         return Number.isInteger(value);
//     }
// }

// class CustomArrayUtils {
//     static customIsArray(value) {
//         return Array.isArray(value);
//     }

//     static isNumberArray(arr) {
//         return arr.every(element => typeof element === 'number');
//     }

//     static sum(arr) {
//         return arr.reduce((total, current) => total + current, 0);
//     }

//     static max(arr) {
//         return Math.max(...arr);
//     }

//     static min(arr) {
//         return Math.min(...arr);
//     }
// }

// // Example usage for Array methods:
// const numberArray = [1, 2, 3, 4, 5];
// const nonNumberArray = ["one", "two", "three"];

// console.log("Is Number Array:", CustomArrayUtils.isNumberArray(numberArray)); // true
// console.log("Is Number Array:", CustomArrayUtils.isNumberArray(nonNumberArray)); // false

// console.log("Sum:", CustomArrayUtils.sum(numberArray)); // 15
// console.log("Max:", CustomArrayUtils.max(numberArray)); // 5
// console.log("Min:", CustomArrayUtils.min(numberArray)); // 1

//10. Person - superclass, RichPerson - subclass
// class Person {
//     constructor(housePrice, housesNumber, carPrice, carsNumber, bankAccount) {
//         this.housePrice = housePrice;
//         this.housesNumber = housesNumber;
//         this.carPrice = carPrice;
//         this.carsNumber = carsNumber;
//         this.bankAccount = bankAccount;
//     }

//     getWealth() {
//         return this.housePrice * this.housesNumber +
//                this.carPrice * this.carsNumber +
//                this.bankAccount;
//     }
// }

// class RichPerson extends Person {
//     constructor(housePrice, housesNumber, carPrice, carsNumber, bankAccount, companyPrice, companiesNumber, investigation) {
//         super(housePrice, housesNumber, carPrice, carsNumber, bankAccount);
//         this.companyPrice = companyPrice;
//         this.companiesNumber = companiesNumber;
//         this.investigation = investigation;
//     }

//     getWealth() {
//         // Barcha boyliklarni qo'shib chiqamiz, olgan merosi ham qo'shamiz
//         return super.getWealth() + this.companyPrice * this.companiesNumber + this.investigation;
//     }
// }

// // Example usage:
// const ordinaryPerson = new Person(200000, 1, 30000, 2, 50000);
// console.log("Ordinary Person's Wealth:", ordinaryPerson.getWealth());

// const richPerson = new RichPerson(500000, 3, 80000, 4, 200000, 1000000, 2, 500000);
// console.log("Rich Person's Wealth:", richPerson.getWealth());



