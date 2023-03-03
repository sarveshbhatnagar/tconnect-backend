class PrivateDetails{
    password: string;

    constructor(password: string) {
        this.password = password;
    }
}

class PrivateDetailsBuilder{
    password: string;

    constructor() {
        this.password = "";
        return this;
    }

    withPassword(password: string) {
        this.password = password;
        return this;
    }

    build() {
        return new PrivateDetails(this.password);
    }

    static from(obj: {password?: string}) {
        const passwordDetails = new PrivateDetailsBuilder();
        obj.password && passwordDetails.withPassword(obj.password);
        return passwordDetails.build();
    }
}

export { PrivateDetails, PrivateDetailsBuilder };