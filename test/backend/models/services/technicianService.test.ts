import { Technician } from "../../../../lib/backend/models/characters/technician";
import { TechnicianService } from "../../../../lib/backend/models/services/technicianService";

describe("TechnicianService", () => {
    it("should create an instance of LandlordService with a valid rentorObject", () => {
      const technicianObject = new Technician({username: "john"});
      const technicianService = new TechnicianService(technicianObject);
      expect(technicianService.technician).toEqual(technicianObject);
    });

});