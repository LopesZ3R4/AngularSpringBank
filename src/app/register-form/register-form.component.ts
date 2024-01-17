// register-form.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  user = {
    chavePix: '',
    accountHolderName: '',
    cpf: ''
  };

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['cpf']) {
        this.user.cpf = params['cpf'];
      }
    });
  }

  onSubmit(): void {
    const endpoint = 'http://18.189.140.162:8080/api/useraccount';
    this.http.post(endpoint, this.user).subscribe({
      next: (response) => {
        console.log('Cadastro realizado com sucesso:', response);
// Aqui você pode redirecionar o usuário para outra rota ou exibir uma mensagem de sucesso
// this.router.navigate(['/rota-de-sucesso']);
      },
      error: (error) => {
        console.error('Erro ao realizar cadastro:', error);
// Aqui você pode tratar o erro, como exibir uma mensagem de erro ao usuário
      }
    });
  }
}
