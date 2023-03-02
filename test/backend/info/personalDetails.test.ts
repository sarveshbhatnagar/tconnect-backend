import { PersonalDetailsBuilder } from '../../../lib/backend/info/personalDetails';

describe('PersonalDetails', () => {
    it('should build a PersonalDetails object', () => {
        const personalDetails = new PersonalDetailsBuilder('testUsername')
            .withFirstName('John')
            .withLastName('Doe')
            .withEmail('johndoe@abc.com')
            .withPhone('1234567890')
            .build();
        expect (personalDetails.firstName).toBe('John');
        expect (personalDetails.lastName).toBe('Doe');
        expect (personalDetails.email).toBe('johndoe@abc.com');
        expect (personalDetails.phone).toBe('1234567890');
        expect (personalDetails.username).toBe('testUsername');
    });
});


describe('PersonalDetails: from', () => {
    it('should build a PersonalDetails object from an object', () => {
        const userObject = {
            firstName: 'John',
            lastName: 'Doe',
            email: 'jdjs@msm.com',
            phone: '1234567890',
            username: 'testUsername',
            somethingelse: 'something'
        }
        const personalDetails = PersonalDetailsBuilder.from(userObject);
        expect (personalDetails.firstName).toBe('John');
        expect (personalDetails.lastName).toBe('Doe');
        expect (personalDetails.email).toBe('jdjs@msm.com');
        expect (personalDetails.phone).toBe('1234567890');
        expect (personalDetails.username).toBe('testUsername');
    });

    it('should build a PersonalDetails object from an object with missing fields', () => {
        const userObject = {
            firstName: 'John',
            lastName: 'Doe',
            username: 'testUsername',
            somethingelse: 'something'
        }
        const personalDetails = PersonalDetailsBuilder.from(userObject);
        expect (personalDetails.firstName).toBe('John');
        expect (personalDetails.lastName).toBe('Doe');
        expect (personalDetails.email).toBeUndefined();
        expect (personalDetails.phone).toBeUndefined();
        expect (personalDetails.username).toBe('testUsername');
    });
});