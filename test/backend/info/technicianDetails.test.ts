import { TechnicianDetailsBuilder, TechnicianType } from "../../../lib/backend/info/technicianDetails";

describe("TechnicianDetails", () => {
    it("should have a valid constructor", () => {
        const TechnicianDetails = new TechnicianDetailsBuilder()
            .withWorktype(TechnicianType.Electrician)
            .withResponseTime(500)
            .withHourlyRate(500)
            .build();
        expect(TechnicianDetails.worktype).toBe("Electrician");
        expect(TechnicianDetails.responseTime).toBe(500);
        expect(TechnicianDetails.hourlyRate).toBe(500);

    })
})