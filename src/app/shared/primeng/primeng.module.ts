import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuItem} from 'primeng/api';
import {InputTextModule} from 'primeng/inputtext';
import {StepsModule} from 'primeng/steps';
import {SkeletonModule} from 'primeng/skeleton';
import {ToastModule} from 'primeng/toast';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';


const PrimeNGModules = [
  InputTextModule,
  StepsModule,
  SkeletonModule,
  ToastModule,
  DynamicDialogModule,
  ToolbarModule,
  ButtonModule,
  CardModule,

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...PrimeNGModules

  ],
  exports: [
    ...PrimeNGModules
  ]
})
export class PrimengModule { }
