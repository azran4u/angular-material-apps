import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableStyleComponent } from './mat-table-style.component';
import { SharedModule } from 'app/shared/shared.module';



@NgModule({
  declarations: [MatTableStyleComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    MatTableStyleComponent
  ]
})
export class MatTableStyleModule { }
