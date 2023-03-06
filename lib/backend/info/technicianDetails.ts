enum TechnicianType {
    Electrician = "Electrician",
    Plumber = "Plumber",
    Carpenter = "Carpenter",
    Painter = "Painter",
    Mason = "Mason",
    CCTV = "CCTV",
    AC = "AC",
    Other = "Other"
}



class TechnicianDetails{
    worktype: TechnicianType;
    responseTime?: number;
    hourlyRate: number;

    constructor( worktype: TechnicianType, hourlyRate: number, responseTime?: number){
        this.worktype = worktype;
        this.responseTime = responseTime;
        this.hourlyRate = hourlyRate;
    }

}


class TechnicianDetailsBuilder{
    worktype: TechnicianType;
    responseTime?: number;
    hourlyRate: number;

    constructor(){
        return this;
    }

    withWorktype(worktype: TechnicianType){
        this.worktype = worktype;
        return this;
    }

    withResponseTime(responseTime?: number){
        this.responseTime = responseTime;
        return this;
    }

    withHourlyRate(hourlyRate: number){
        this.hourlyRate = hourlyRate;
        return this;
    }

    build(){
        return new TechnicianDetails(this.worktype, this.hourlyRate, this.responseTime);
    }

}

export { TechnicianDetails, TechnicianDetailsBuilder, TechnicianType}