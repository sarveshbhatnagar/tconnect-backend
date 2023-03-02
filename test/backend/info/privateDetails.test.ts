import { PrivateDetailsBuilder } from '../../../lib/backend/info/privateDetails';

describe( "PrivateDetails", () => {
    it("should have a valid constructor", () => {
        const privateDetails = new PrivateDetailsBuilder()
        .withPassword("00000000")
        .build();
    expect(privateDetails.password).toBe("00000000");
    });
});