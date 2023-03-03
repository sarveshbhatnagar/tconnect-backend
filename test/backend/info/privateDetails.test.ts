import { PrivateDetailsBuilder } from '../../../lib/backend/info/privateDetails';

describe( "PrivateDetails", () => {
    it("should have a valid constructor", () => {
        const privateDetails = new PrivateDetailsBuilder()
        .withPassword("00000000")
        .build();
    expect(privateDetails.password).toBe("00000000");
    });
});

describe( "PrivateDetailsBuilder : from", () => {
    it("should work with empty constructor", () => {
        const privateDetails = PrivateDetailsBuilder.from({});
        expect(privateDetails.password).toBe("");
    });

    it("should work with one parameter", () => {
        const privateDetails = PrivateDetailsBuilder.from({password: "00000000"});
        expect(privateDetails.password).toBe("00000000");
    });

    it("should work with extra parameters", () => {
        const userObject = {password: "00000000", extra: "extra"};
        const privateDetails = PrivateDetailsBuilder.from(userObject);
        expect(privateDetails.password).toBe("00000000");
    });
});