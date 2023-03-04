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

    withPassword(password: string= "") {
        this.password = password;
        return this;
    }

    build() {
        return new PrivateDetails(this.password);
    }

    static from(obj: {password?: string}) {
        return new PrivateDetailsBuilder()
                            .withPassword(obj.password)
                            .build();
    }
}

export { PrivateDetails, PrivateDetailsBuilder };