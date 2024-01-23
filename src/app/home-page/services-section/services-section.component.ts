// services-section.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.scss']
})
export class ServicesSectionComponent {
  services = [
    { title: 'Conta Poupança', description: 'Poupança segura e com alta rentabilidade.', iconPath: 'conta' },
    { title: 'Empréstimos Pessoais', description: 'Opções de empréstimo flexíveis e fáceis.', iconPath: 'emprestimo' },
    { title: 'Cartões de Crédito', description: 'Convenientes e vantajosos.', iconPath: 'cartao' },
  ];
}
