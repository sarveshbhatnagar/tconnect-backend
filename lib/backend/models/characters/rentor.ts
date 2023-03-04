import { RentorDetials, RentorDetialsBuilder } from "../../info/rentorDetails";
import { Character } from "../../schemas/Character";

class Rentor extends Character {
    rentorDetails: RentorDetials;
    constructor(object: any) {
        super(object);
        this.rentorDetails = RentorDetialsBuilder.from(object);
    }
}

export { Rentor };