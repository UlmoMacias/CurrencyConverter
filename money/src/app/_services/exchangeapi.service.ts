import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";


@Injectable()
export class exchangeApiService{

    constructor(private httpclient:HttpClient){}

    getexchanges(): Observable<any>{
        return this.httpclient.get("https://api.exchangerate-api.com/v4/latest/usd")
    }

}