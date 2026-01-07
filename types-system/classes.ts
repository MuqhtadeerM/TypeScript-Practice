// classes are templates or blue prints to create the objects

class Employee {
  startShift(): void {
    console.log("start to shift of employee");
  }

  endshift(): void {
    console.log("employee shift is ended");
  }
}

const employee = new Employee();
employee.startShift();
employee.endshift();
