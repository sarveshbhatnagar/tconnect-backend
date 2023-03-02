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
        return this;
    }

    withLeaseDate(leaseDate: string){
        this.leaseDate = leaseDate;
        return this;
    }

    withMonthlyCost(monthlyCost: number){
        this.monthlyCost = monthlyCost;
        return this;
    }

    withDueDate( dueDate: string){
        this.dueDate = dueDate
        return this;
    }

    withMissedPayments( missedPayments: number){
        this.missedPayments = missedPayments;
        return this;
    }

    withRentedSince( rentedSince: string){
        this.rentedSince = rentedSince;
        return this;
    }

    withRentedTill( rentedTill: string){
        this.rentedTill = rentedTill;
        return this;
    }

    withRentorScore( rentorScore: number){
        this.rentorScore = rentorScore;
        return this;
    }


    build() {
        return new RentorDetials(this.leaseDate, this.monthlyCost, this.dueDate, this.missedPayments, this.rentedSince, this.rentedTill, this.rentorScore);
    }
}

export { RentorDetials, RentorDetialsBuilder};