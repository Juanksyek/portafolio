import { Component } from '@angular/core';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    tel: ''
  };

  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private contactService: ContactService) {}

  onSubmit() {
    this.contactService.saveContact(this.contact).subscribe(
      response => {
      console.log('Contact savedl', response);
      this.successMessage = 'Send succesfully.';
      this.errorMessage = null;
      this.contact = {name:'', email:'', tel:'',};

      setTimeout(()=> this.successMessage = null, 5000);
    },
    error => {
      console.error('Error saving contact', error);
      this.errorMessage = 'Failed to send your data. Please, try again.';
      this.successMessage = null;

      setTimeout(()=> this.successMessage = null, 5000);
    });
  }
}
