import { Landlord } from "../../../../lib/backend/models/characters/landlord";

describe("Landlord", () => {
    it("should have a valid constructor", () => {
        const landlord = new Landlord({
            username: "John",
        });
        
        expect(landlord.personalDetails.username).toBe("John");
        expect(landlord.privateDetails.verifyPassword("")).toBe(true);
        expect(landlord.landlordDetails.photo).toBe("");

    });
});