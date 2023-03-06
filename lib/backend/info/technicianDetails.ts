enum TechnicianType {
    ELECTRICIAN = "Electrician",
    PLUMBER = "Plumber",
    CARPENTER = "Carpenter",
    PAINTER = "Painter",
    MASON = "Mason",
    CCTV = "CCTV",
    AC = "AC",
    OTHER = "Other"
}



class TechnicianDetails{
    worktype: TechnicianType;
    responseTime: number;
    hourlyRate: number;

    constructor( worktype: TechnicianType, hourlyRate: number, responseTime: number){
        this.worktype = worktype;
        this.responseTime = responseTime;
        this.hourlyRate = hourlyRate;
    }

}


class TechnicianDetailsBuilder{
    worktype: TechnicianType;
    responseTime: number;
    hourlyRate: number;

    constructor(){
        this.worktype = TechnicianType.OTHER;
        this.responseTime = 0;
        this.hourlyRate = 0;
        return this;
    }

    withWorktype(worktype: TechnicianType = TechnicianType.OTHER){
        this.worktype = worktype;
        return this;
    }

    withResponseTime(responseTime: number = 0){
        this.responseTime = responseTime;
        return this;
    }

    withHourlyRate(hourlyRate: number = 0){
        this.hourlyRate = hourlyRate;
        return this;
    }

    build(){
        return new TechnicianDetails(this.worktype, this.hourlyRate, this.responseTime);
    }

    static from(obj: {worktype?: TechnicianType, responseTime?: number, hourlyRate?: number}) {
        return new TechnicianDetailsBuilder().withWorktype(obj.worktype)
                                        .withHourlyRate(obj.hourlyRate)
                                        .withResponseTime(obj.responseTime).build();

    }


}

    


export { TechnicianDetails, TechnicianDetailsBuilder, TechnicianType}