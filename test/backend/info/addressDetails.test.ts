import { AddressDetails, AddressDetailsBuilder } from "../../../lib/backend/info/addressDetails";
describe("AddressDetails", () => {
    it("should have a valid constructor", () => {
        const addressDetails = new AddressDetailsBuilder()
            .withLocation("testLocation")
            .withApartment("testApartment")
            .withAddressLine("testAddressLine")
            .withState("testState")
            .build();
        expect(addressDetails.location).toBe("testLocation");
        expect(addressDetails.apartment).toBe("testApartment");
        expect(addressDetails.addressLine).toBe("testAddressLine");
        expect(addressDetails.state).toBe("testState");
    });
});

