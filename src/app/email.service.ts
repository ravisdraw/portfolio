import { Injectable } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor() {}

  public sendEmail(form: any): Promise<EmailJSResponseStatus> {
    return emailjs.sendForm('service_i401h0e', 'template_jxtp359', form, {
      publicKey: 'a8WKu-TWAi6dKQQMT',
    });
  }
} 