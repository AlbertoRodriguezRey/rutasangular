import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  randomNumbers: number[] = Array.from({ length: 6 }, () => Math.floor(Math.random() * 100));
  constructor() {

  }
}
