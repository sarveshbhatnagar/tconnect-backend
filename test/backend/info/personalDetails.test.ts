import { PersonalDetailsBuilder } from '../../../lib/backend/info/personalDetails';

describe('PersonalDetails', () => {
    it('should build a PersonalDetails object', () => {
        const personalDetails = new PersonalDetailsBuilder()
            .withFirstName('John')
            .withLastName('Doe')
            .withEmail('johndoe@abc.com')
            .withPhone('1234567890')
            .withUsername('johndoe')
            .build();
        expect (personalDetails.firstName).toBe('John');
        expect (personalDetails.lastName).toBe('Doe');
        expect (personalDetails.email).toBe('johndoe@abc.com');
        expect (personalDetails.phone).toBe('1234567890');
        expect (personalDetails.username).toBe('johndoe');
    });
});