import { LandlordDetilsBuilder } from "../../../lib/backend/info/landlordDetails";

describe("LandlordDetils", () => {
    it("should have a valid constructor", () => {
        const landlordDetils = new LandlordDetilsBuilder()
        .withTenants(["testTenant1", "testTenant2"])
        .withPhoto("testPhoto")
        .withNumberOfTenants(1)
        .withAutoForward(true)
        .withAutoResolve(false)
        .build();
    expect(landlordDetils.tenants).toStrictEqual(["testTenant1", "testTenant2"]);
    expect(landlordDetils.photo).toBe("testPhoto");
    expect(landlordDetils.numberOfTenants).toBe(1);
    expect(landlordDetils.autoForward).toBe(true);
    expect(landlordDetils.autoResolve).toBe(false);
    });

    it("should work with empty constructor", () => {
        const landlordDetils = new LandlordDetilsBuilder().build();
        expect(landlordDetils.tenants).toStrictEqual([]);
        expect(landlordDetils.photo).toBe("");
        expect(landlordDetils.numberOfTenants).toBe(0);
        expect(landlordDetils.autoForward).toBe(false);
        expect(landlordDetils.autoResolve).toBe(false);
    });
});

describe("LandlordDetailsBuilder : from", () => {
    it("should work with empty constructor", () => {
        const landlordDetils = LandlordDetilsBuilder.from({});
        expect(landlordDetils.tenants).toStrictEqual([]);
        expect(landlordDetils.photo).toBe("");
        expect(landlordDetils.numberOfTenants).toBe(0);
        expect(landlordDetils.autoForward).toBe(false);
        expect(landlordDetils.autoResolve).toBe(false);
    });

    it("should work with one parameter", () => {
        const landlordDetils = LandlordDetilsBuilder.from({tenants: ["testTenant1", "testTenant2"]});
        expect(landlordDetils.tenants).toStrictEqual(["testTenant1", "testTenant2"]);
        expect(landlordDetils.photo).toBe("");
        expect(landlordDetils.numberOfTenants).toBe(0);
        expect(landlordDetils.autoForward).toBe(false);
        expect(landlordDetils.autoResolve).toBe(false);
    });

    it("should work with extra parameters", () => {
        const userObject = {tenants: ["testTenant1", "testTenant2"], extra: "extra"};
        const landlordDetils = LandlordDetilsBuilder.from(userObject);
        expect(landlordDetils.tenants).toStrictEqual(["testTenant1", "testTenant2"]);
        expect(landlordDetils.photo).toBe("");
        expect(landlordDetils.numberOfTenants).toBe(0);
        expect(landlordDetils.autoForward).toBe(false);
        expect(landlordDetils.autoResolve).toBe(false);
    });

});