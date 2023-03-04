import { PersonalDetails, PersonalDetailsBuilder } from "../info/personalDetails";
import { PrivateDetails, PrivateDetailsBuilder } from "../info/privateDetails";

interface ICharacter {
    personalDetails: PersonalDetails;
    privateDetails: PrivateDetails;
}


class Character implements ICharacter {
    personalDetails: PersonalDetails;
    privateDetails: PrivateDetails;

    constructor(object: any) {
        this.personalDetails = PersonalDetailsBuilder.from(object);
        this.privateDetails = PrivateDetailsBuilder.from(object);
    }

}

export { Character };