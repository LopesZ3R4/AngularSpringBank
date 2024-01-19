import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      cpf: ['', [Validators.required, Validators.minLength(11)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.loginForm.controls; }

  onLogin() {
    if (this.loginForm.invalid) {
      return;
    }

    const loginData = {
      cpf: this.f['cpf'].value,
      password: this.f['password'].value
    };

    // TODO: Implementar a lógica de envio dos dados para o servidor aqui
    console.log('Dados de Login:', loginData);

    setTimeout(() => {
      if (loginData.cpf === '12345678910' && loginData.password === 'password123') {
        console.log('Login bem-sucedido');
      } else {
        console.log('Falha no login');
      }
    }, 1000);
  }
}
