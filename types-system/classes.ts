// classes are templates or blue prints to create the objects

// means it defines the properties and methods of the object...

class Employee {
  constructor(public age: number) {}
  protected endShift(): void {
    console.log("start to shift of employee");
  }
}

const employee = new Employee(20);
console.log(employee.age);

// class Mechanic extends Employee {
//   private startShift(): void {
//     console.log("Machanic started");
//   }

//   goToWork(): void {
//     this.startShift();
//   }
// }

// const mechanic = new Mechanic();
// mechanic.goToWork();

// modifiers to acces the privvate data
