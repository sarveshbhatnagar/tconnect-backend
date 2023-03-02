import { LandlordDetilsBuilder } from "../../../lib/backend/info/landlordDetails";

describe("LandlordDetils", () => {
    it("should have a valid constructor", () => {
        const landlordDetils = new LandlordDetilsBuilder()
        .withTenants(["testTenant"])
        .withPhoto("testPhoto")
        .withNumberOfTenants(1)
        .build();
    expect(landlordDetils.tenants).toStrictEqual(["testTenant"]);
    expect(landlordDetils.photo).toBe("testPhoto");
    expect(landlordDetils.numberOfTenants).toBe(1);
    });
});