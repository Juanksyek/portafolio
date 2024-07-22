import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {
  public reportsOpen = false;

  toggleReports() {
    this.reportsOpen = !this.reportsOpen;
  }
}

