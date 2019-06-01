import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule
  ]
})
export class AngularMaterialModule { }
