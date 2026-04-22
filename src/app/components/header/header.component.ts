import { Component, Inject, OnInit, HostListener, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DarkModeService } from '../../services/dark-mode.service';
import { selected, selectNew, selectedSmall } from '../../utils';

@Component({
  standalone: false,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  scrolled = false;
  menuOpen = false;

  constructor(
    private darkModeService: DarkModeService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngOnInit() {
    // visual position of the toggle is handled via Angular bindings in template
  }

  @HostListener('window:scroll')
  onScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.scrolled = window.scrollY > 20;
    }
  }

  toggleMenu() { this.menuOpen = !this.menuOpen; }

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }

  get isDark(): boolean {
    return this.darkModeService.isDarkModeEnabled();
  }

  selected = selected;
  selectNew = selectNew;
  selectedSmall = selectedSmall;
}

