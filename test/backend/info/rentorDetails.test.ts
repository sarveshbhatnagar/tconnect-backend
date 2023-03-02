import { RentorDetialsBuilder } from "../../../lib/backend/info/rentorDetails";

describe("RentorDetials", () => {
    it("should have a valid constructor", () => {
        const RentorDetials = new RentorDetialsBuilder()
            .withLeaseDate("testLeaseDate")
            .withMonthlyCost(100)
            .withDueDate("testDueDate")
            .withMissedPayments(1)
            .withRentedSince("testRentedSince")
            .withRentedTill("testRentedTill")
            .withRentorScore(100)
            .build();
        expect(RentorDetials.leaseDate).toBe("testLeaseDate");
        expect(RentorDetials.monthlyCost).toBe(100);
        expect(RentorDetials.dueDate).toBe("testDueDate");
        expect(RentorDetials.missedPayments).toBe(1);
        expect(RentorDetials.rentedSince).toBe("testRentedSince");
        expect(RentorDetials.rentedTill).toBe("testRentedTill");
        expect(RentorDetials.rentorScore).toBe(100);
    });
});