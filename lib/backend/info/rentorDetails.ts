class RentorDetials{
    leaseDate: string;
    monthlyCost: number;
    dueDate: string;
    missedPayments: number;
    rentedSince: string;
    rentedTill: string;
    rentorScore: number;


    constructor(leaseDate: string, monthlyCost: number, dueDate: string, missedPayments: number, rentedSince: string, rentedTill: string, rentorScore: number) {
        this.leaseDate = leaseDate;
        this.monthlyCost = monthlyCost;
        this.dueDate = dueDate;
        this.missedPayments = missedPayments;
        this.rentedSince = rentedSince;
        this.rentedTill = rentedTill;
        this.rentorScore = rentorScore;
    }
}

class RentorDetialsBuilder{
    leaseDate : string;
    monthlyCost: number;
    dueDate: string;
    missedPayments: number;
    rentedSince: string;
    rentedTill: string;
    rentorScore: number;

    constructor(){
        // Even when withXyz is not called, object will have default values.
        this.rentorScore = 0;
        this.leaseDate = "";
        this.monthlyCost = 0;
        this.dueDate = "";
        this.missedPayments = 0;
        this.rentedSince = "";
        this.rentedTill = "";
        return this;
    }

    withLeaseDate(leaseDate: string = ""){
        this.leaseDate = leaseDate;
        return this;
    }

    withMonthlyCost(monthlyCost: number = 0){
        this.monthlyCost = monthlyCost;
        return this;
    }

    withDueDate( dueDate: string = ""){
        this.dueDate = dueDate
        return this;
    }

    withMissedPayments( missedPayments: number = 0){
        this.missedPayments = missedPayments;
        return this;
    }

    withRentedSince( rentedSince: string = ""){
        this.rentedSince = rentedSince;
        return this;
    }

    withRentedTill( rentedTill: string = ""){
        this.rentedTill = rentedTill;
        return this;
    }

    withRentorScore( rentorScore: number = 0){
        this.rentorScore = rentorScore;
        return this;
    }


    build() {
        return new RentorDetials(this.leaseDate, this.monthlyCost, this.dueDate, this.missedPayments, this.rentedSince, this.rentedTill, this.rentorScore);
    }

    static from(obj: {leaseDate: string, monthlyCost: number, dueDate: string, missedPayments: number, rentedSince: string, rentedTill: string, rentorScore?: number}) {
        const rentorDetailsBuilder = new RentorDetialsBuilder().withLeaseDate(obj.leaseDate)
                                        .withMonthlyCost(obj.monthlyCost)
                                        .withDueDate(obj.dueDate)
                                        .withMissedPayments(obj.missedPayments)
                                        .withRentedSince(obj.rentedSince)
                                        .withRentedTill(obj.rentedTill);

        obj.rentorScore && rentorDetailsBuilder.withRentorScore(obj.rentorScore);
        return rentorDetailsBuilder.build();
    }
}

export { RentorDetials, RentorDetialsBuilder};