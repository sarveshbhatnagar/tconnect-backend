import { Rentor } from "../characters/Rentor";

class RentorService {
    rentor: Rentor;
    constructor(rentorObject: Rentor) {
        this.rentor = rentorObject;
    }
}

export { RentorService };