// src/app/services/dark-mode.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  toggleDarkMode() {
    document.body.classList.toggle('dark');
  }
}
