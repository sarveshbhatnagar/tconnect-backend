
   
class AddressDetails{
    location: string;
    apartment: string;
    addressLine: string;
    state: string;

    constructor(location: string, apartment: string, addressLine: string, state: string){
        this.location = location;
        this.apartment = apartment;
        this.addressLine = addressLine;
        this.state = state;
    }
}

class AddressDetailsBuilder{
    location: string;
    apartment: string;
    addressLine: string;
    state: string;

    constructor(){
        return this;
    }

    withLocation(location: string){
        this.location = location;
        return this;
    }

    withApartment(apartment: string){
        this.apartment = apartment;
        return this;
    }

    withAddressLine(addressLine: string){
        this.addressLine = addressLine;
        return this;
    }

    withState(state: string){
        this.state = state;
        return this;
    }

    build(){
        return new AddressDetails(this.location, this.apartment, this.addressLine, this.state);
    }

}

export { AddressDetails, AddressDetailsBuilder};