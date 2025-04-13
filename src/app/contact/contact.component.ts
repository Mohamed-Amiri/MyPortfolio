import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  message : string ="";
  name : string ="";
  email : string ="";
  messageSent: boolean = false;
  userEmail: any;


  onSubmit() {

    if (this.message!=null && this.email!=null){
      this.messageSent=true;

    }

  }


}
