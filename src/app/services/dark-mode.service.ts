// src/app/services/dark-mode.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  private isDarkMode = false;

  toggleDarkMode(){
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark',this.isDarkMode);
    this.updateDotPosition();
  }

  private updateDotPosition(){
    const dot = document.querySelector('.dot');
    if(dot){
      if(this.isDarkMode){
        dot.classList.add('move');
      } else {
        dot.classList.remove('move');
      }
    }
  }

  isDarkModeEnabled(): boolean{
    return this.isDarkMode
  }
}