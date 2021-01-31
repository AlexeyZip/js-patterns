class Car {
    constructor(model, price) {
        this.model = model
        this.price = price
    }
}

class carFactory {
    constructor() {
        this.cars = []
    }

    create(model, price) {
        const candidate = this.getCar(model)
        if(candidate) {
            return candidate
        }

        const newCar = new Car(model, price)
        this.cars.push(newCar)
        return newCar
    }

    getCar(model) {
      return   this.cars.find(car => car.model === model)
    }
}

const factory = new carFactory()

const audi = factory.create('audi', 100000);
const bmw = factory.create('bmw', 60000);
const audiA3 = factory.create('audi', 50000);
console.log(audi);
console.log(audiA3);
console.log(bmw);

console.log(audi === audiA3);