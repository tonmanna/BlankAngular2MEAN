import {Component, OnInit} from '@angular/core';
import {ContactUsModel} from './contactus.model'
import {ContactUsService} from './contactus.service'
@Component({
    selector : 'contact-us',
    template : `
    <div class="contact-us">
           From : <input type="text" #fromText/><br/>
        Subject : <input type="text" #fromSubject/><br/>
        Message : <textarea name="Text1" cols="40" rows="5" #fromMessage></textarea><br/>
        <button (click)="onClick(fromText.value,fromSubject.value,fromMessage.value)">Send</button>
    </div>
    Error : <div class="error" *ngIf="errorMessage">{{errorMessage}}</div>
    <div>=================================================================</div>
    <div *ngIf="contactus">From :{{contactus.from}}</div>
    <div *ngIf="contactus">Subject :{{contactus.subject}}</div>    
    <div *ngIf="contactus">Message:{{contactus.message}}</div>
    `,
    providers: [ContactUsService]
})
export class ContactUs implements OnInit{
    errorMessage : string;
    contactus : ContactUsModel;
    constructor(private contactusservice : ContactUsService){};

    onClick(from:string,subject:string,message:string){
        let postData = new ContactUsModel();
        console.log(postData);
        postData.from = from;
        postData.subject = subject;
        postData.message = message;
        console.log(postData);
        this.contactusservice.setContactUs(postData).subscribe( (x)=> { alert(x);});
    };

    getSample() {
        this.contactusservice.getContactUs()
            .subscribe(
                contactusmodel => this.contactus = <ContactUsModel>contactusmodel,
                error =>  this.errorMessage = <any>error);
    };

    ngOnInit(){
        this.getSample()
    };

}