// Person class
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Getter for age
  get age() {
    return this._age;
  }

  // Setter for age
  set age(newAge) {
    this._age = newAge;
  }
}


// Student class
class Student extends Person {
  constructor(name, age) {
    super(name, age);
  }

  study() {
    console.log(`${this.name} is studying`);
  }
}


// Teacher class
class Teacher extends Person {
  constructor(name, age) {
    super(name, age);
  }

  teach() {
    console.log(`${this.name} is teaching`);
  }
}


// Function to run tests
function runTest() {

  // Person test
  const person = new Person("John", 25);
  console.log(person.name); // John

  person.age = 30;
  console.log(person.age); // 30


  // Student test
  const student = new Student("Alice", 22);
  student.study(); // Alice is studying


  // Teacher test
  const teacher = new Teacher("Bob", 40);
  teacher.teach(); // Bob is teaching

}