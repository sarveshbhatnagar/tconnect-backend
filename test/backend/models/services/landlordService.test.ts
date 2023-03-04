import { Landlord } from "../../../../lib/backend/models/characters/landlord";
import { LandlordService } from "../../../../lib/backend/models/services/landlordService";

describe("LandlordService", () => {
    it("should create an instance of LandlordService with a valid landlordObject", () => {
      const landlordObject = new Landlord({username: "john"});
      const landlordService = new LandlordService(landlordObject);
      expect(landlordService.landlord).toEqual(landlordObject);
    });

});