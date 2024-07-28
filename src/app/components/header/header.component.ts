import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DarkModeService } from '../../services/dark-mode.service';
import { selected, selectNew, selectedSmall } from '../../utils';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(
    private darkModeService: DarkModeService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.updateDotPosition();
    }
  }

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
    if (isPlatformBrowser(this.platformId)) {
      this.updateDotPosition();
    }
  }

  updateDotPosition() {
    const dot = document.querySelector('.dot');
    if (dot) {
      const darkModeEnabled = this.darkModeService.isDarkModeEnabled();
      if (darkModeEnabled) {
        dot.classList.add('transform', 'translate-x-full');
      } else {
        dot.classList.remove('transform', 'translate-x-full');
      }
    }
  }

  selected = selected;
  selectNew = selectNew;
  selectedSmall = selectedSmall;
}
