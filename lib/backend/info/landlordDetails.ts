class LandlordDetils {
    tenants: string[];
    photo: string;
    numberOfTenants: number;
    autoForward: boolean;
    autoResolve: boolean;

    constructor(tenants: string[], photo: string, numberOfTenants: number, autoForward: boolean , autoResolve: boolean ) {
        this.tenants = tenants;
        this.photo = photo;
        this.numberOfTenants = numberOfTenants;
        this.autoForward = autoForward;
        this.autoResolve = autoResolve;
    }
}

class LandlordDetilsBuilder{
    tenants: string[];
    photo: string;
    numberOfTenants: number;
    autoForward: boolean;
    autoResolve: boolean;

    constructor(){
        // Even when withXyz is not called, object will have default values.
        this.tenants = [];
        this.photo = "";
        this.numberOfTenants = 0;
        this.autoForward = false;
        this.autoResolve = false;
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

    withAutoForward(autoForward: boolean = false){
        this.autoForward = autoForward;
        return this;
    }

    withAutoResolve(autoResolve: boolean = false){
        this.autoResolve = autoResolve;
        return this;
    }


    build() {
        return new LandlordDetils(this.tenants, this.photo, this.numberOfTenants, this.autoForward, this.autoResolve);
    }

    static from(obj: {tenants?: string[], photo?: string, numberOfTenants?: number, autoForward?: boolean, autoResolve?: boolean}) {
        return new LandlordDetilsBuilder()
                            .withTenants(obj.tenants)
                            .withPhoto(obj.photo)
                            .withNumberOfTenants(obj.numberOfTenants)
                            .withAutoForward(obj.autoForward)
                            .withAutoResolve(obj.autoResolve)
                            .build();
    }
}

export { LandlordDetils, LandlordDetilsBuilder};