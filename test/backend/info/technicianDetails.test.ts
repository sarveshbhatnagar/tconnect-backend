import { TechnicianDetailsBuilder, TechnicianType } from "../../../lib/backend/info/technicianDetails";

describe("TechnicianDetails", () => {
    it("should have a valid constructor", () => {
        const TechnicianDetails = new TechnicianDetailsBuilder()
            .withWorktype(TechnicianType.ELECTRICIAN)
            .withResponseTime(500)
            .withHourlyRate(500)
            .build();
        expect(TechnicianDetails.worktype).toBe("Electrician");
        expect(TechnicianDetails.responseTime).toBe(500);
        expect(TechnicianDetails.hourlyRate).toBe(500);

    });

    it("should work without any paramater", () => {
        const technicianDetails = new TechnicianDetailsBuilder().build();
        
        expect(technicianDetails.worktype).toBe("Other");
        expect(technicianDetails.responseTime).toBe(0);
        expect(technicianDetails.hourlyRate).toBe(0);

    });
});