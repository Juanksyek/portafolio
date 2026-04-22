import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { environment } from '../../../environments/environment';

@Component({
  standalone: false,
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('600ms cubic-bezier(0.35,0,0.25,1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('alertAnim', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('300ms ease', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('200ms ease', style({ opacity: 0, transform: 'translateY(-10px)' }))
      ])
    ])
  ]
})
export class ContactComponent {
  contactForm: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;
  isSubmitting = false;

  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      tel: ['', [Validators.required, Validators.pattern(/^\+?[0-9\s\-().]{7,20}$/)]],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]]
    });
  }

  get name()    { return this.contactForm.get('name'); }
  get email()   { return this.contactForm.get('email'); }
  get tel()     { return this.contactForm.get('tel'); }
  get message() { return this.contactForm.get('message'); }

  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      this.errorMessage = 'Please fix the errors in the form.';
      return;
    }
    this.isSubmitting = true;
    this.successMessage = null;
    this.errorMessage = null;

    const isEmailJsConfigured = !!environment.emailjsServiceId && !environment.emailjsServiceId.includes('YOUR_')
      && !!environment.emailjsTemplateId && !environment.emailjsTemplateId.includes('YOUR_')
      && !!environment.emailjsPublicKey && !environment.emailjsPublicKey.includes('YOUR_');

    if (!isEmailJsConfigured) {
      // fallback: open user's mail client with prefilled content
      const { name, email, tel, message } = this.contactForm.value;
      const subject = encodeURIComponent(`Contact from portfolio: ${name || 'No name'}`);
      const body = encodeURIComponent(`Name: ${name || ''}\nEmail: ${email || ''}\nTel: ${tel || ''}\n\nMessage:\n${message || ''}`);
      this.successMessage = "EmailJS not configured — opening your mail client...";
      this.isSubmitting = false;
      window.location.href = `mailto:jc_haran@hotmail.com?subject=${subject}&body=${body}`;
      return;
    }

    this.contactService.sendContact(this.contactForm.value).subscribe({
      next: () => {
        this.successMessage = "Message sent! I'll get back to you soon 🚀";
        this.contactForm.reset();
        this.isSubmitting = false;
      },
      error: () => {
        // on failure, open mail client as fallback
        const { name, email, tel, message } = this.contactForm.value;
        const subject = encodeURIComponent(`Contact from portfolio: ${name || 'No name'}`);
        const body = encodeURIComponent(`Name: ${name || ''}\nEmail: ${email || ''}\nTel: ${tel || ''}\n\nMessage:\n${message || ''}`);
        window.location.href = `mailto:jc_haran@hotmail.com?subject=${subject}&body=${body}`;
        this.errorMessage = 'Could not send automatically; opened your mail client instead.';
        this.isSubmitting = false;
      }
    });
  }
}
