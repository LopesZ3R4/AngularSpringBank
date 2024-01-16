// details-form.component.ts
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.scss']
})
export class DetailsFormComponent implements OnInit {
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
