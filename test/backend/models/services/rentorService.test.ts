import { Rentor } from "../../../../lib/backend/models/characters/rentor";
import { RentorService } from "../../../../lib/backend/models/services/rentorService";

describe("RentorService", () => {
    it("should create an instance of RentorService with a valid rentorObject", () => {
      const rentorObject = new Rentor({username: "john"});
      const rentorService = new RentorService(rentorObject);
      expect(rentorService.rentor).toEqual(rentorObject);
    });

});