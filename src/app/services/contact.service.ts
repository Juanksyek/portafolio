import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import emailjs from '@emailjs/browser';
import { environment } from '../../environments/environment';

declare global {
  interface Window {
    __env?: { [key: string]: string };
  }
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private serviceId: string;
  private templateId: string;
  private publicKey: string;

  constructor() {
    const winEnv = (window && (window as any).__env) || {};
    this.serviceId = winEnv.EMAILJS_SERVICE_ID || environment.emailjsServiceId;
    this.templateId = winEnv.EMAILJS_TEMPLATE_ID || environment.emailjsTemplateId;
    this.publicKey = winEnv.EMAILJS_PUBLIC_KEY || environment.emailjsPublicKey;

    try {
      if (this.publicKey && !this.publicKey.includes('YOUR_')) {
        // initialize EmailJS with public key to avoid passing it on every call
        emailjs.init(this.publicKey as any);
      }
    } catch (e) {
      // don't break app if init fails
      // console.warn('EmailJS init failed', e);
    }
  }

  sendContact(data: { name: string; email: string; tel: string; message: string }): Observable<any> {
    const params = {
      from_name: data.name,
      reply_to:  data.email,
      phone:     data.tel,
      message:   data.message,
      to_email:  'jc_haran@hotmail.com',
    };
    const service = this.serviceId;
    const template = this.templateId;
    const pk = this.publicKey;

    // If init was not called, pass publicKey as option to send
    return from(
      emailjs.send(
        service,
        template,
        params,
        pk && !pk.includes('YOUR_') ? { publicKey: pk } : undefined
      )
    );
  }
}