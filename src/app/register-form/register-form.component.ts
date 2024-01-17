// register-form.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  registrationForm = this.fb.group({
    cpf: ['', Validators.required],
    accountHolderName: ['', Validators.required],
    chavePix: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private http: HttpClient,
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['cpf']) {
        // @ts-ignore
        this.registrationForm.get('cpf').setValue(params['cpf']);
      }
    });
  }

  onSubmit(): void {
    const formValue = { ...this.registrationForm.value };

    // @ts-ignore
    formValue.cpf = formValue.cpf.replace(/\D/g, '');

    //const endpoint = 'http://18.189.140.162:8080/api/useraccount';
    const endpoint = 'http://localhost:8080/api/useraccount';

    this.http.post(endpoint, formValue).subscribe({
      next: (response) => {
        console.log('Cadastro realizado com sucesso:', response);
        // Redirecionar o usuário ou outras ações pós-cadastro.
      },
      error: (error) => {
        console.error('Erro ao realizar cadastro:', error);
        // Mostrar mensagem de erro ao usuário.
      }
    });
  }
}
