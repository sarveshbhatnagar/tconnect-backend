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
        // Even when withXyz is not called, object will have default values.
        this.tenants = [];
        this.photo = "";
        this.numberOfTenants = 0;
        return this;
    }

    withTenants(tenants: string[]= []){
        this.tenants = tenants;
        return this;
    }

    withPhoto(photo: string = ""){
        this.photo = photo;
        return this;
    }

    withNumberOfTenants( numberOfTenants: number = 0){
        this.numberOfTenants = numberOfTenants;
        return this;
    }

    build() {
        return new LandlordDetils(this.tenants, this.photo, this.numberOfTenants);
    }

    static from(obj: {tenants?: string[], photo?: string, numberOfTenants?: number}) {
        return new LandlordDetilsBuilder()
                            .withTenants(obj.tenants)
                            .withPhoto(obj.photo)
                            .withNumberOfTenants(obj.numberOfTenants)
                            .build();
    }
}

export { LandlordDetils, LandlordDetilsBuilder};