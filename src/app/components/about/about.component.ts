import { Component, OnInit, OnDestroy, HostListener, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';

@Component({
  standalone: false,
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('700ms cubic-bezier(0.35,0,0.25,1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('slideUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(40px)' }),
        animate('600ms {{delay}}ms cubic-bezier(0.35,0,0.25,1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('cardList', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(30px)' }),
          stagger(120, [
            animate('500ms cubic-bezier(0.35,0,0.25,1)', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class AboutComponent implements OnInit, OnDestroy {
  // Typewriter
  roles = ['Full-Stack Developer', 'NestJS Specialist', 'Backend Engineer', 'UI/UX Enthusiast'];
  displayedRole = '';
  private roleIndex = 0;
  private charIndex = 0;
  private deleting = false;
  private typingTimer: any;

  ngOnInit() { this.typeRole(); }
  ngOnDestroy() { clearTimeout(this.typingTimer); }

  private typeRole() {
    const current = this.roles[this.roleIndex];
    if (!this.deleting) {
      this.displayedRole = current.substring(0, ++this.charIndex);
      if (this.charIndex === current.length) {
        this.deleting = true;
        this.typingTimer = setTimeout(() => this.typeRole(), 1800);
        return;
      }
    } else {
      this.displayedRole = current.substring(0, --this.charIndex);
      if (this.charIndex === 0) {
        this.deleting = false;
        this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      }
    }
    this.typingTimer = setTimeout(() => this.typeRole(), this.deleting ? 60 : 100);
  }
}
