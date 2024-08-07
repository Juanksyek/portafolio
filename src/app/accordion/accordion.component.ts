import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {
  public reportsOpen = false;
  public openIndex: number = 0;

  toggleReports() {
    this.reportsOpen = !this.reportsOpen;
  }

  toggleIndex(index: number) {
    this.openIndex = index;
  }
}
