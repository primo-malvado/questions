import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { dumbGuard } from './dumb.guard';
import { TemperatureComponent } from './temperature/temperature.component';

const routes: Routes = [
  { path: "cake", loadChildren: () => import('./cake/cake.module').then(m => m.CakeModule) ,
    canActivate: [dumbGuard]
},
  {path: "temperature", component: TemperatureComponent},
  { path: 'tests', loadChildren: () => import('./tests/tests.module').then(m => m.TestsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
