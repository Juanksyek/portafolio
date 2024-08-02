import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = environment.apiUrl + '/contact';

  constructor(private http: HttpClient) {}

  saveContact(contact: any) {
    return this.http.post(`${this.apiUrl}/contacts`, contact);
  }

  getContacts() {
    return this.http.get(`${this.apiUrl}/contacts`);
  }
}
