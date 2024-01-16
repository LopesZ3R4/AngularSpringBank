// register-form.component.ts
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  user = {
    cpf: '',
    fullName: '',
    email: '',
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['cpf']) {
        this.user.cpf = params['cpf'];
      }
    });
  }

  onSubmit(): void {
    console.log(this.user);
  }
}
