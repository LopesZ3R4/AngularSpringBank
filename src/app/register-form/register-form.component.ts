// register-form.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {
    this.registrationForm = this.fb.group({
      cpf: ['', [Validators.required]],
      accountHolderName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+ [a-zA-Z]+/)]],
      chavePix: this.fb.group({
        type: ['cpf', Validators.required],
        valor: [''],
        telefone: [''],
        email: ['']
      })
    });
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['cpf']) {
        this.registrationForm.patchValue({
          cpf: params['cpf'],
          chavePix: { valor: params['cpf'] }
        });
      }
    });

    this.registrationForm.get('chavePix.type')!.valueChanges.subscribe(type => {
      const valorControl = this.registrationForm.get('chavePix.valor')!;
      valorControl.clearValidators();

      if (type === 'telefone') {

        valorControl.setValidators([Validators.required, Validators.minLength(12), Validators.maxLength(13)]);
      } else if (type === 'email') {

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        valorControl.setValidators([Validators.required, Validators.pattern(emailRegex)]);
      }

      valorControl.updateValueAndValidity();
    });

    this.registrationForm.get('chavePix.type')!.valueChanges.subscribe(type => {
      const chavePixControl = this.registrationForm.get('chavePix');
      switch (type) {
        case 'cpf':
          chavePixControl!.get('valor')!.setValue(this.registrationForm.get('cpf')!.value);
          chavePixControl!.get('telefone')!.reset();
          chavePixControl!.get('email')!.reset();
          break;
        case 'telefone':
          chavePixControl!.get('valor')!.setValue('');
          break;
        case 'email':
          chavePixControl!.get('valor')!.setValue('');
          break;
        case 'aleatoria':
          chavePixControl!.get('valor')!.setValue(this.generateRandomKey());
          break;
      }
    });
  }
  generateRandomKey(): string {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }
  get chavePixType() {
    return this.registrationForm.get('chavePix.type');
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      const formValue = this.prepareDataForSubmission(this.registrationForm.value);
      const endpoint = 'http://18.189.140.162:8080/api/useraccount';
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

  private prepareDataForSubmission(formValue: any) {
    // Clean up the form value before sending
    formValue.cpf = formValue.cpf.replace(/\D/g, '');
    if (formValue.chavePix.type === 'cpf') {
      formValue.chavePix.valor = formValue.cpf;
    } else if (formValue.chavePix.type === 'telefone') {
      formValue.chavePix.valor = formValue.chavePix.telefone;
    } else if (formValue.chavePix.type === 'email') {
      formValue.chavePix.valor = formValue.chavePix.email;
    }
    // Remove the nested structure for chavePix
    const chavePixValor = formValue.chavePix.valor;
    delete formValue.chavePix;
    formValue.chavePix = chavePixValor;
    return formValue;
  }
}
