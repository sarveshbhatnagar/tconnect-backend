import { Rentor } from "../../../../lib/backend/models/characters/Rentor";

describe('Rentor', () => {
    it('should have a valid constructor', () => {
        const rentor = new Rentor({
            username: "John",
        });
        
        expect(rentor.personalDetails.username).toBe("John");
        expect(rentor.privateDetails.verifyPassword("")).toBe(true);
        expect(rentor.rentorDetails.dueDate).toBe("");

    });
});