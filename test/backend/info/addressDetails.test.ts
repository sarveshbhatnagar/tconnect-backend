import { AddressDetails, AddressDetailsBuilder, GeohashValue, GeohashValueBuilder} from '../../../src/backend/info/addressDetails';

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

    it("should have a valid geohash constructor", () => {
        const geohashValue = new GeohashValueBuilder()
            .withLatitude(1)
            .withLongitude(1)
            .withPrecision(1)
            .build();
        expect(geohashValue.latitude).toBe(1);
        expect(geohashValue.longitude).toBe(1);
        expect(geohashValue.precision).toBe(1);
    }
}

// TODO: I have to create a geohashString using latitude and longitude values
// and then compare it to the geohashString in the geohashValue class
// for refeerence use full name generator by bhaiya.