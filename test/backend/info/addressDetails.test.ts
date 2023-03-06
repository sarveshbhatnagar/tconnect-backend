import { AddressDetails, AddressDetailsBuilder } from "../../../lib/backend/info/addressDetails";
describe("AddressDetails", () => {
    it("should have a valid constructor", () => {
        const addressDetails = new AddressDetailsBuilder()
            .withGeoHash("testLocation")
            .withApartment("testApartment")
            .withAddressLine("testAddressLine")
            .withState("testState")
            .build();
        expect(addressDetails.geoHash).toBe("testLocation");
        expect(addressDetails.apartment).toBe("testApartment");
        expect(addressDetails.addressLine).toBe("testAddressLine");
        expect(addressDetails.state).toBe("testState");
    });

    it("should work without any parameter", () => {
        const addressDetails = new AddressDetailsBuilder().build();
        expect(addressDetails.geoHash).toBe("testLocation");
        expect(addressDetails.apartment).toBe("");
        expect(addressDetails.addressLine).toBe("testAddressLine");
        expect(addressDetails.state).toBe("testState");
    });
});

