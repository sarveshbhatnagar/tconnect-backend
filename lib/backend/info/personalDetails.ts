class PersonalDetails {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    username: string;

    constructor(firstName: string, lastName: string, email: string, phone: string, username: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.username = username;
    }
}

class PersonalDetailsBuilder{
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    username: string;

    constructor() {
        return this;
    }

    withEmail(email: string) {
        this.email = email;
        return this;
    }
    
    withFirstName(firstName: string) {
        this.firstName = firstName;
        return this;
    }

    withLastName(lastName: string) {
        this.lastName = lastName;
        return this;
    }

    withPhone(phone: string) {
        this.phone = phone;
        return this;
    }

    withUsername(username: string) {
        this.username = username;
        return this;
    }

    build() {
        return new PersonalDetails(this.firstName, this.lastName, this.email, this.phone, this.username);
    }
}

export { PersonalDetails, PersonalDetailsBuilder };