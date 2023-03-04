import { Technician } from "../../../../lib/backend/models/characters/Technician";

describe("Technician", () => {
    it("should have a valid constructor", () => {
        const technician = new Technician({
            username: "John",
        });
        
        expect(technician.personalDetails.username).toBe("John");
        expect(technician.privateDetails.verifyPassword("")).toBe(true);

    });
});