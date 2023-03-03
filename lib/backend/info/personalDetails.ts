class PersonalDetails {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    username: string;

    constructor(username: string, firstName?: string, lastName?: string|undefined, email?: string|undefined, phone?: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.username = username;
    }
}

class PersonalDetailsBuilder{
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    username: string;

    constructor(username: string) {
        this.username = username;
        return this;
    }

    withEmail(email?: string) {
        this.email = email;
        return this;
    }
    
    withFirstName(firstName?: string) {
        this.firstName = firstName;
        return this;
    }

    withLastName(lastName?: string) {
        this.lastName = lastName;
        return this;
    }

    withPhone(phone?: string) {
        this.phone = phone;
        return this;
    }



    build() {
        return new PersonalDetails(this.username, this.firstName, this.lastName, this.email, this.phone);
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