import { Landlord } from "../characters/landlord";

class LandlordService {
    landlord: Landlord;

    constructor(landlordObject: Landlord) {
        this.landlord = landlordObject;
    }
}

export { LandlordService };