class Complaints {
    constructor() {
        this.complaints = []
    }

    replay(complaint) {}

    add(complaint) {
        this.complaints.push(complaint)
        return this.replay(complaint)
    }
}

class ProductComplaints extends Complaints {
    replay({id, customer, details}) {
        return `Product: ${id}: ${customer} ${details}`
    }
}
class ServiceComplaints extends Complaints {
    replay({id, customer, details}) {
        return `Service: ${id}: ${customer} ${details}`
    }
}

class ComplainRegistry {
    register(customer, type, details) {
        const id = Date.now()
        let complaint

        if(type === ServiceComplaints) {
            complaint = new ServiceComplaints()
        } else {
            complaint = new ProductComplaints
        }
        return complaint.add({id, customer, details})
    }
}

const registry = new ComplainRegistry()

console.log(registry.register('Alex', 'service', 'unfinished'));