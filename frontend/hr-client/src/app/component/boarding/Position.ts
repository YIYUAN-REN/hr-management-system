export class Position{
    title: String;
    managerId: number;
    startDate: String;
    endDate: String;

    constructor(
        title: String,
        managerId: number,
        startDate: String,
        endDate: String
    ){
        this.title = title;
        this.managerId = managerId;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}