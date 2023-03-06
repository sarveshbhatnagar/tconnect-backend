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

    })

    it("should have a valid constructor", () => {
        const TechnicianDetails = TechnicianDetailsBuilder.from({
            worktype: TechnicianType.PLUMBER,
            responseTime: 500,
            hourlyRate: 500
        });
        expect(TechnicianDetails.worktype).toBe("Plumber");
        expect(TechnicianDetails.responseTime).toBe(500);
        expect(TechnicianDetails.hourlyRate).toBe(500);

    })
});