import { NgModule, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestsRoutingModule } from './tests-routing.module'; 
import { ShowAlertComponent } from './show-alert/show-alert.component';
import { SharedModule } from '../shared/shared.module';
import { ToastService } from '../shared/toast/toast.service';


@NgModule({
  declarations: [ 
    ShowAlertComponent
  ],
  imports: [
    CommonModule,
    TestsRoutingModule,
    SharedModule
  ],

})
export class TestsModule { }
