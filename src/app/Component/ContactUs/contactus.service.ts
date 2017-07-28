import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { ContactUsModel } from "./contactus.model";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";
@Injectable()
export class ContactUsService {
    public getContactUsUrl = "/contactus/getContactUs";
    public setContactUsUrl = "/contactus/setContactUs";

    constructor(private http: Http) { }

    public getContactUs(): Observable<ContactUsModel> {
        return this.http.get(this.getContactUsUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }
    public setContactUs(dataSave: ContactUsModel): Observable<any> {
        const body = JSON.stringify(dataSave);
        const headersData = new Headers({ "Content-Type": "application/json" });
        const options = new RequestOptions({ headers: headersData });

        return this.http.post(this.setContactUsUrl, body, options)
            .map(this.extractStringData)
            .catch(this.handleError);
    }

    public extractData(res: Response) {
        const body = res.json();
        const result = body || {};
        return result;
    }
    public extractStringData(res: Response) {
        const body = res.text();
        const result = body || "";
        return result;
    }

    public handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We"d also dig deeper into the error to get a better message
        const errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : "Server error";
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
