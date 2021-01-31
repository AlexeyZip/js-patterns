class Server {
    constructor(ip, port) {
        this.port = port
        this.ip = ip
    }
    get url() {
    return `http://${this.ip}:${this.port}`
    }
}

function aws(server) {
    server.isAWS = true
    server.awsInfo = function() {
        return server.url
    }
    return server
}

function azure(server) {
    server.isAzure = true
    server.port += 500
    return server
}

const s1 = aws(new Server('12.12.12.36', 8080));
console.log(s1.isAWS);
console.log(s1.awsInfo());

const s2 = azure(new Server('22.32.74.36', 4000));
console.log(s2.isAzure);
console.log(s2.url);