import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowAlertComponent } from './show-alert/show-alert.component';

const routes: Routes = [{ path: '', component: ShowAlertComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestsRoutingModule { }
