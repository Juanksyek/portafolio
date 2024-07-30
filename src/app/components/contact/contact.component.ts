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

  constructor(private contactService: ContactService) {}

  onSubmit() {
    this.contactService.saveContact(this.contact).subscribe(response => {
      console.log('Contact saved', response);
      this.contact = { name: '', email: '', tel: '' };
    }, error => {
      console.error('Error saving contact', error);
    });
  }
}
