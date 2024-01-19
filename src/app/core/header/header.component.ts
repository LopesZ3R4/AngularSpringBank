// header.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  navActive = false;

  toggleNav() {
    this.navActive = !this.navActive;
    console.log(this.navActive)
  }
}