import { Rentor } from "../characters/rentor";

class RentorService {
    rentor: Rentor;
    constructor(rentorObject: Rentor) {
        this.rentor = rentorObject;
    }
}

export { RentorService };