export class Divisa{
    base: string;
    date: Date;
    time_last_updated: number;
    rates: Map<string, number>;

    constructor(base, date, time_last_updated,rates){
        this.base = base;
        this.date = date;
        this.time_last_updated = time_last_updated;
        this.rates = rates;
    }
}