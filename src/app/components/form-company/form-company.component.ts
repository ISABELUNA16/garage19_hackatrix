import { Component, OnInit } from '@angular/core';
import { isNumber } from 'util';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-company',
  templateUrl: './form-company.component.html',
  styleUrls: ['./form-company.component.sass']
})
export class FormCompanyComponent implements OnInit {
  formCompany: FormGroup;
  constructor(private fb: FormBuilder) { }

  numberOnly($event: KeyboardEvent) {
    var str = (<HTMLInputElement>$event.target).value;
    if (!str) return;
    var lastChar = Number(str[str.length - 1]);
    if (isNaN(lastChar)) $event.preventDefault();
  }

  ngOnInit() {
    this.formCompany = this.fb.group({
      strarea: ['', Validators.required],
      strname: ['', Validators.required],
      strdescription: ['', Validators.required],
      strruc: ['', Validators.required],
      strprovince: ['', Validators.required],
      straddress: ['', Validators.required],
      strdistrito: ['', Validators.required],
      stremail: ['', Validators.required],
      strphone: ['', Validators.required]
    });
  }

  ngSubmit() {
    Swal.fire({
      text: 'Tu registro fue enviado correctamente, recibirás un correo confirmando tu subscripción',
      type: 'success',
      confirmButtonText: 'Cool'
    }).then((result) => {
      this.formCompany.reset();
    });
  }
}
