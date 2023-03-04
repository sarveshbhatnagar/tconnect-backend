import { PrivateDetailsBuilder } from '../../../lib/backend/info/privateDetails';

describe( "PrivateDetails", () => {
    it("should have a valid constructor", () => {
        const privateDetails = new PrivateDetailsBuilder()
        .withPassword("00000000")
        .build();
    expect(privateDetails.verifyPassword("00000000")).toBe(true);
    });
});

describe( "PrivateDetailsBuilder : from", () => {
    it("should work with empty constructor", () => {
        const someObject = {};
        const privateDetails = PrivateDetailsBuilder.from(someObject);
        expect(privateDetails.verifyPassword("")).toBe(true);
    });

    it("should fail if wrong password without initialization", () => {
        const privateDetails = PrivateDetailsBuilder.from({});
        expect(privateDetails.verifyPassword("00000000")).toBe(false);
    });

    it("should work with one parameter", () => {
        const privateDetails = PrivateDetailsBuilder.from({password: "00000000"});
        expect(privateDetails.verifyPassword("00000000")).toBe(true);
    });

    it("should work with extra parameters", () => {
        const userObject = {password: "00000000", extra: "extra"};
        const privateDetails = PrivateDetailsBuilder.from(userObject);
        expect(privateDetails.verifyPassword("00000000")).toBe(true);
    });

    it("should return false with wrong password", () => {
        const userObject = {password: "00000000", extra: "extra"};
        const privateDetails = PrivateDetailsBuilder.from(userObject);
        expect(privateDetails.verifyPassword("11111111")).toBe(false);
    });
});