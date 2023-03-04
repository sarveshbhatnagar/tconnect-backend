import { LandlordDetils, LandlordDetilsBuilder } from "../../info/landlordDetails";
import { Character } from "../../schemas/Character";

class Landlord extends Character {
    landlordDetails: LandlordDetils;

    constructor(object: any) {
        super(object);
        this.landlordDetails = LandlordDetilsBuilder.from(object);
    }
}

export { Landlord };