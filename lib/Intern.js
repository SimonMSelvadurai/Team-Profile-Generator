// Intern class extends Employee.
// This class has its own method school
const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    const role = "Intern";
    super(name, id, email, role);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
