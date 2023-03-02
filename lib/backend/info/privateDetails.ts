class PrivateDetails{
    password: string;

    constructor(password: string) {
        this.password = password;
    }
}

class PrivateDetailsBuilder{
    password: string;

    constructor() {
        return this;
    }

    withPassword(password: string) {
        this.password = password;
        return this;
    }

    build() {
        return new PrivateDetails(this.password);
    }
}

export { PrivateDetails, PrivateDetailsBuilder };