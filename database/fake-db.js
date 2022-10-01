const Employee = require("../Models/employee")

class FakeDb {
    constructor() {
        this.employees = [
            {
                name: "Gustavo",
                age: 18,
                salary: 1800,
                designation: "Backend Developer"
            },
            {
                name: "Matheus",
                age: 19,
                salary: 2500,
                designation: "Frontend Developer"
            },
            {
                name: "Victor",
                age: 20,
                salary: 1500,
                designation: "Data Scientist"
            }]
    }

    pushEmployeesToDb() {
        this.employees.forEach((employee) => {
            const newEmployee = new Employee(employee);

            newEmployee.save();
        })
    }
    
    async cleanDb(){
        await Employee.deleteMany({});
    }

    async seedDb() {
        await this.cleanDb();
        this.pushEmployeesToDb();
    }

}

module.exports = FakeDb;