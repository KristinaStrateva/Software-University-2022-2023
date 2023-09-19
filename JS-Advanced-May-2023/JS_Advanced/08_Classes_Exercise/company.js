class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (
            name === '' ||
            name === undefined ||
            name === null ||
            salary === '' ||
            salary === undefined ||
            salary === null ||
            salary < 0 ||
            position === '' ||
            position === undefined ||
            position === null ||
            department === '' ||
            department === undefined ||
            department === null
        ) {
            throw new Error('Invalid input!');
        }

        if (!this.departments[department]) {
            this.departments[department] = { averageSalary: 0, employees: [] };
        }

        this.departments[department].employees.push({ name, salary, position });
        this.departments[department].averageSalary = this.departments[department].employees.reduce((acc, employee) => acc + employee.salary, 0) / this.departments[department].employees.length;

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        const sortedDepartments = Object.entries(this.departments).sort((dep1, dep2) => dep2[1].averageSalary - dep1[1].averageSalary);
        const theBestDepartment = sortedDepartments[0];
        const bestDepartmentName = theBestDepartment[0];
        const sortedEmployees = theBestDepartment[1].employees
            .sort((empl1, empl2) => {
                return empl2.salary - empl1.salary || empl1.name.localeCompare(empl2.name);
            })
            .map(employee => `${employee.name} ${employee.salary} ${employee.position}`);

        return `Best Department is: ${bestDepartmentName}\nAverage salary: ${theBestDepartment[1].averageSalary.toFixed(2)}\n${sortedEmployees.join('\n')}`;
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());

//Best Department is: Construction
// Average salary: 1500.00
// Stan 2000 architect
// Stanimir 2000 engineer
// Pesho 1500 electrical engineer
// Slavi 500 dyer