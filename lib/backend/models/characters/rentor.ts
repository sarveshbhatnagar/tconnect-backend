import { RentorDetials, RentorDetialsBuilder } from "../../info/rentorDetails";
import { Character } from "../../schemas/character";

class Rentor extends Character {
    rentorDetails: RentorDetials;
    constructor(object: any) {
        super(object);
        this.rentorDetails = RentorDetialsBuilder.from(object);
    }
}

export { Rentor };