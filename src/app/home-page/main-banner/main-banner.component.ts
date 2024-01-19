// main-banner.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.scss']
})
export class MainBannerComponent {
  cpfForm: FormGroup;
  navActive = false;

  constructor(private router: Router, private fb: FormBuilder) {
    this.cpfForm = this.fb.group({
      cpf: ['']
    });
  }
  toggleNav() {
    this.navActive = !this.navActive;
  }

  goToDetailsForm(): void {
    const cpfValue = this.cpfForm.value.cpf;
    this.router.navigate(['/cadastro'], { queryParams: { cpf: cpfValue.replace(/\D/g, '') } });
  }
}
