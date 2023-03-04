import { PersonalDetailsBuilder } from "../../../lib/backend/info/personalDetails";
import { PrivateDetailsBuilder } from "../../../lib/backend/info/privateDetails";
import { Character } from "../../../lib/backend/schemas/Character";

describe("Character", () => {
    it("should create an instance of Character with valid personal and private details", () => {
      const personalDetails = PersonalDetailsBuilder.from({
        firstName: "John",
        lastName: "Doe",
        username: "johndoe"
      });
      const privateDetails = PrivateDetailsBuilder.from({
        password: "password123"
      });
      const character = new Character({ ...personalDetails, ...privateDetails });
      expect(character.personalDetails).toEqual(personalDetails);
      expect(character.privateDetails).toEqual(privateDetails);
    });
  
    it("should throw an error when object is not provided", () => {
      expect(() => new Character(null)).toThrowError("Invalid object");
    });
});
  