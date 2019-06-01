import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-personform',
  templateUrl: './personform.component.html',
  styleUrls: ['./personform.component.sass']
})
export class PersonFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  helpRecord() {
    Swal.fire(
      'Adjunta tu antecedente penal en formato .pdf',
    );
    alert('');
  }
  sendRegister() {
    Swal.fire({
      text: 'Tu registro fue enviado correctamente, recibirás un correo confirmando tu subscripción',
      type: 'success',
      confirmButtonText: 'Cool'
    });
  }
}
