import geohash from 'geohash';

class GeohashValue{
    latitude: number;
    longitude: number;
    precision: number;

    constructor(latitude: number, longitude: number, precision: number){
        this.latitude = latitude;
        this.longitude = longitude;
        this.precision = precision;
    }
}

class GeohashValueBuilder{
    latitude: number;
    longitude: number;
    precision: number;

    constructor(){
        return this;
    }

    withLatitude(latitude: number){
        this.latitude = latitude;
        return this;
    }

    withLongitude(longitude: number){
        this.longitude = longitude;
        return this;
    }

    withPrecision(precision: number){
        this.precision = precision;
        return this;
    }

    build(){
        return new GeohashValue(this.latitude, this.longitude, this.precision);
    }
}
    
const geohashString = geohash.encode()
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

export { AddressDetails, AddressDetailsBuilder, GeohashValue, GeohashValueBuilder };