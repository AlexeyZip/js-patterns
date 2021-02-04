class Employee {
    constructor(name, salary) {
        this.name = name
        this.salary = salary
    }

    responsibilities() {}

    work() {
        return `${this.name} do ${this.responsibilities()}`
    }

    getPaid() {
        return `${this.name} have ${this.salary}`
    }
}

class Developer extends Employee {
    constructor(name, salary) {
        super(name, salary)
    }

    responsibilities() {
        return 'Coding'
    }
}
class Tester extends Employee {
    constructor(name, salary) {
        super(name, salary)
    }

    responsibilities() {
        return 'Testing'
    }
}

const Alex = new Developer('Alex', 20000000)
const Kostik = new Tester('Kostik', 10000000)
console.log(Alex.getPaid());
console.log(Alex.responsibilities());
console.log(Alex.work());
console.log(Kostik.getPaid());
console.log(Kostik.responsibilities());
console.log(Kostik.work());