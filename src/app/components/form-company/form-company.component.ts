import { Component, OnInit } from '@angular/core';
import { isNumber } from 'util';

@Component({
  selector: 'app-form-company',
  templateUrl: './form-company.component.html',
  styleUrls: ['./form-company.component.sass']
})
export class FormCompanyComponent implements OnInit {

  constructor() { }

  numberOnly($event:KeyboardEvent){
  //  var str=(<HTMLInputElement>$event.target).value;
  //  if(!str) return;
  //   var lastChar=str[str.length-1];
  //   if(isNaN(lastChar)){
  //     (<HTMLInputElement>$event.target).value=str.substr(0,str.length-1)

  //   }
  }

  ngOnInit() {
  }

}
