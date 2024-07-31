import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.contactForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/),
          Validators.pattern(/^(?!.*  ).*$/)
        ]
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],
      tel: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\+?[0-9-]+$/),
          Validators.pattern(/^(?!.*  ).*$/)
        ]
      ]
    });
  }

  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get tel() {
    return this.contactForm.get('tel');
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.contactService.saveContact(this.contactForm.value).subscribe(response => {
        this.successMessage = 'Contact saved successfully!';
        this.errorMessage = null;
        this.contactForm.reset();
      },
        error => {
          this.errorMessage = 'There was an error saving the contact.';
          this.successMessage = null;
        });
    } else {
      this.errorMessage = 'Please correct the errors in the form.';
      this.successMessage = null;
    }
  }
}