import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastContainrerComponent } from './toast/toast-containrer/toast-containrer.component';



@NgModule({
  declarations: [
    ToastContainrerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToastContainrerComponent

  ],

})
export class SharedModule { }
