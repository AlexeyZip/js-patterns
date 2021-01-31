const car = {
    wheels: 4,

    init() {
        console.log(`У меня есть ${this.wheels} колеса, мой владелец ${this.name}`);
    }
}

const carWithOwner = Object.create(car,{
    name: {
        value: 'Алексей'
    }
}) 

console.log(carWithOwner.__proto__ === car);

carWithOwner.init()