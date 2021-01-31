class User {
    constructor(name) {
        this.name = name
        this.room = null
    }

    send(message, to) {
        this.room.send(message, this, to)
    }

    receive(message, from) {
        console.log(`${from.name} => ${this.name}: ${message}`);
    }
}


class chatRoom {
    constructor() {
        this.users = {}
    }

    register(user) {
        this.users[user.name] = user
        user.room = this
    }

    send(message, from, to) {
        if (to) {
            to.receive(message, from)
        } else {
            Object.keys(this.users).forEach(key => {
                if (this.users[key] !== from) {
                    this.users[key].receive(message, from)
                }
            })
        }
    }
}
const u1 = new User('Alex');
const u2 = new User('Kostik');
const u3 = new User('Alexandr');


const room = new chatRoom()

room.register(u1)
room.register(u2)
room.register(u3)

u1.send('Hy!', u3)
u2.send('Go play!', u1)
u3.send('I width you)')
