import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  show:boolean = false;
  termsAndCondtions:boolean = false;
  paymentTermsAndConditions:boolean = false;
}
