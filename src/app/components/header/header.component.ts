// src/app/components/header/header.component.ts
import { Component } from '@angular/core';
import { DarkModeService } from '../../services/dark-mode.service';
import { selected, selectNew, selectedSmall } from '../../utils';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private darkModeService: DarkModeService) {}

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }

  selected = selected;
  selectNew = selectNew;
  selectedSmall = selectedSmall;
}
