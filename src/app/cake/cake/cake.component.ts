import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.scss']
})
export class CakeComponent  {
  ingredients!: string[];

  getIngredients(){
    return ['eggs', "milk", "flour"];
  }

}
