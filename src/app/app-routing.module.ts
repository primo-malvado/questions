import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { dumbGuard } from './dumb.guard';

const routes: Routes = [
  { path: "cake", loadChildren: () => import('./cake/cake.module').then(m => m.CakeModule) ,
    canActivate: [dumbGuard]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
