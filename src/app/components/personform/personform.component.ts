import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personform',
  templateUrl: './personform.component.html',
  styleUrls: ['./personform.component.sass']
})
export class PersonFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  helpRecord(){
    alert('Adjunta tu antecedente penal en formato .pdf');
  }
}
