class myMath {
    constructor(initialValue = 0) {
        this.num  = initialValue
    }

    square() {
        return this.num ** 2
    }

    cube() {
        return this.num ** 3
    }
}

class Command {
    constructor(subject) {
        this.subject = subject
        this.commandExecuted = []
    }
    execute(command) {
        this.commandExecuted.push(command)
        return this.subject[command]()
    }
}

const x = new Command(new myMath(4));
console.log(x.execute('square'));
console.log(x.execute('cube'));


console.log(x.commandExecuted);