import { Injectable }     from '@angular/core';
import { Http,Response,Headers,RequestOptions } from '@angular/http';
import { ContactUsModel } from './contactus.model';
import { Observable }     from 'rxjs/Observable';
@Injectable()
export class ContactUsService {
    constructor (private http: Http) {}
    private getContactUsUrl = '/contactus/getContactUs';  // URL to web API

    getContactUs (): Observable<ContactUsModel> {
        return this.http.get(this.getContactUsUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private setContactUsUrl = '/contactus/setContactUs';  // URL to web API
    setContactUs (dataSave: ContactUsModel): Observable<string>{
        let body = JSON.stringify(dataSave);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.setContactUsUrl, body, options)
            .map(this.extractStringData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        let result = body || { };
        return result;
    }
    private extractStringData(res: Response) {
        let body = res.text();
        let result = body || "";
        return result;
    }


    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}