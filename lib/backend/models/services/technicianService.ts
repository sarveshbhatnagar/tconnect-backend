import { Technician } from "../characters/technician";

class TechnicianService {
    technician: Technician;

    constructor(technicianObject: Technician) {
        this.technician = technicianObject;
    }
}

export { TechnicianService };