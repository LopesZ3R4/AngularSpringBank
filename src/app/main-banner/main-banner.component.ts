// main-banner.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.scss']
})
export class MainBannerComponent {
  constructor(private router: Router) {}

  goToDetailsForm(cpf: string) {
    this.router.navigate(['/details-form'], {queryParams: {cpf}});
   }
}
