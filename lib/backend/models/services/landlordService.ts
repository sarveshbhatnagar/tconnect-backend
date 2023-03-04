import { Landlord } from "../characters/Landlord";

class LandlordService {
    landlord: Landlord;

    constructor(landlordObject: Landlord) {
        this.landlord = landlordObject;
    }
}

export { LandlordService };