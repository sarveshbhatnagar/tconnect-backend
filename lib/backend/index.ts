class Greeting {
  constructor(public message: string) {
    this.message = message;
  }

    greet() {   
        return this.message;
    }
}


export {Greeting};