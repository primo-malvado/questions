import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CakeRoutingModule } from './cake-routing.module';
import { CakeComponent } from './cake/cake.component';
import { IngredientsComponent } from './ingredients/ingredients.component';


@NgModule({
  declarations: [
    CakeComponent,
    IngredientsComponent
  ],
  imports: [
    CommonModule,
    CakeRoutingModule
  ]
})
export class CakeModule { }
