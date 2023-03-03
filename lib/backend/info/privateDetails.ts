class PrivateDetails{
    private password: string;

    constructor(password: string) {
        this.password = password;
    }

    verifyPassword(inputPassword: string) {
        // TODO: implement password verification, for now just check equality.
        return this.password == inputPassword;
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