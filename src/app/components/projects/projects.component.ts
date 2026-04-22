import { Component, HostListener } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  // Lightbox state for featured images
  lightboxOpen = false;
  lightboxSrc: string | null = null;

  openLightbox(src: string) {
    this.lightboxSrc = src;
    this.lightboxOpen = true;
    // prevent background scroll while lightbox is open
    try { document.body.style.overflow = 'hidden'; } catch (e) {}
  }

  closeLightbox() {
    this.lightboxOpen = false;
    this.lightboxSrc = null;
    try { document.body.style.overflow = ''; } catch (e) {}
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.lightboxOpen) this.closeLightbox();
  }

}
