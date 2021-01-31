class mySum {
    constructor(initialValue = 42) {
    this.sum = initialValue
    }

    add(value) {
        this.sum += value
        return this
    }
}

const sum1 = new mySum;
const sum2 = new mySum(0);
console.log(sum1.add(8).add(10).add(18).add(2).sum);
console.log(sum2.add(8).add(10).add(18).add(2).sum);
