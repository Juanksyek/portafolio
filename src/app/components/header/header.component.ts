// src/app/components/header/header.component.ts
import { Component } from '@angular/core';
import { selected, selectNew, selectedSmall } from '../../utils';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  selected = selected;
  selectNew = selectNew;
  selectedSmall = selectedSmall;
}
