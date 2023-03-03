class LandlordDetils {
    tenants: string[];
    photo: string;
    numberOfTenants: number;

    constructor(tenants: string[], photo: string, numberOfTenants: number) {
        this.tenants = tenants;
        this.photo = photo;
        this.numberOfTenants = numberOfTenants;
    }
}

class LandlordDetilsBuilder{
    tenants: string[];
    photo: string;
    numberOfTenants: number;

    constructor(){
        this.tenants = [];
        this.photo = "";
        this.numberOfTenants = 0;
        return this;
    }

    withTenants(tenants: string[]){
        this.tenants = tenants;
        return this;
    }

    withPhoto(photo: string){
        this.photo = photo;
        return this;
    }

    withNumberOfTenants( numberOfTenants: number){
        this.numberOfTenants = numberOfTenants;
        return this;
    }

    build() {
        return new LandlordDetils(this.tenants, this.photo, this.numberOfTenants);
    }

    static from(obj: {tenants?: string[], photo?: string, numberOfTenants?: number}) {
        const landlordDetailsBuilder = new LandlordDetilsBuilder();
        obj.tenants && landlordDetailsBuilder.withTenants(obj.tenants);
        obj.photo && landlordDetailsBuilder.withPhoto(obj.photo);
        obj.numberOfTenants && landlordDetailsBuilder.withNumberOfTenants(obj.numberOfTenants);
        return landlordDetailsBuilder.build();
    }
}

export { LandlordDetils, LandlordDetilsBuilder};