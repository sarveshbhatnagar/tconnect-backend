class Greeting {
    message: string;
    constructor(message: string) {
        this.message = message;
    }

    greet() {
        return this.message;
    }
}


export { Greeting };