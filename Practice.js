class Person {
  constructor(name) {
    this._name = name;  // Internal field (with underscore) to store the name
  }
  getName()
  {
    return this._name.toUpperCase();
  }
   get name() {
    return this._name.toUpperCase();  // Get the name and return it in uppercase
  }
  set name(value) {
    if (value.length < 2) {  // Validation: ensure the name is at least 2 characters
      console.log("Name is too short.");
      return;
    }
    this._name = value;  // Set the name if it's valid
  }
}
let Zoya = new Person('Zoya');
Zoya.getName();
console.log(Zoya.getName());


// 💡 Example Usage:
const emp = new Employee(
  "bob",
  "henderson",
  "  Bob.Henderson@email.com ",
  "098666666",
  "QA Automation Engineer",
  780000,
  true
);

console.log(emp.info);
// Employee information: Bob Henderson is a QA Automation Engineer. He works remotely./He works on-site. (if isRemote = false)
// His salary is 780000 AMD. Phone number: 098666666.
// Email: bob.henderson@email.com

emp.raiseSalary(10);
emp.giveRaise(30000);
emp.changePosition("Senior QA Automation Engineer");
console.log(emp.info);
// Updated info reflecting new salary and position
