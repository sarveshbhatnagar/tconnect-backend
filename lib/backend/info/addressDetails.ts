
class AddressDetails{
    geoHash: string;
    apartment: string;
    addressLine: string;
    state: string;

    constructor(geoHash: string, apartment: string, addressLine: string, state: string){
        this.geoHash = geoHash;
        this.apartment = apartment;
        this.addressLine = addressLine;
        this.state = state;
    }
}

class AddressDetailsBuilder{
    geoHash: string;
    apartment: string;
    addressLine: string;
    state: string;

    constructor(){
        this.geoHash = "testLocation";
        this.apartment = "";
        this.addressLine = "testAddressLine";
        this.state = "testState";
        return this;
    }

    withGeoHash(geoHash: string = "testLocation"){
        this.geoHash = geoHash;
        return this;
    }

    withApartment(apartment: string = ""){
        this.apartment = apartment;
        return this;
    }

    withAddressLine(addressLine: string = "testAddressLine"){
        this.addressLine = addressLine;
        return this;
    }

    withState(state: string = "testState"){
        this.state = state;
        return this;
    }

    build(){
        return new AddressDetails(this.geoHash, this.apartment, this.addressLine, this.state);
    }

    static from(obj: {geoHash?: string, apartment?: string, addressLine?: string, state?: string}){
        return new AddressDetailsBuilder().withGeoHash(obj.geoHash).withApartment(obj.apartment).withAddressLine(obj.addressLine).withState(obj.state).build();

        
    }
}

export { AddressDetails, AddressDetailsBuilder};