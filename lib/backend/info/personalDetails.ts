class PersonalDetails {
    firstName: string|undefined;
    lastName: string|undefined;
    email: string|undefined;
    phone: string|undefined;
    username: string;

    constructor(firstName: string|undefined, lastName: string|undefined, email: string|undefined, phone: string|undefined, username: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.username = username;
    }
}

class PersonalDetailsBuilder{
    firstName: string | undefined;
    lastName: string | undefined;
    email: string | undefined;
    phone: string | undefined;
    username: string;

    constructor(username: string) {
        this.username = username;
        return this;
    }

    withEmail(email: string | undefined) {
        this.email = email;
        return this;
    }
    
    withFirstName(firstName: string | undefined) {
        this.firstName = firstName;
        return this;
    }

    withLastName(lastName: string | undefined) {
        this.lastName = lastName;
        return this;
    }

    withPhone(phone: string | undefined) {
        this.phone = phone;
        return this;
    }



    build() {
        return new PersonalDetails(this.firstName, this.lastName, this.email, this.phone, this.username);
    }

    static from(obj: {firstName?: string, lastName?: string, email?: string, phone?: string, username: string}) {
        return new PersonalDetailsBuilder(obj.username)
            .withFirstName(obj.firstName)
            .withLastName(obj.lastName)
            .withEmail(obj.email)
            .withPhone(obj.phone)
            .build();
    }
}

export { PersonalDetails, PersonalDetailsBuilder };