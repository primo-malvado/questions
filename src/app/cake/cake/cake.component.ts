import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.scss']
})
export class CakeComponent implements OnInit {
  ingredients!: string[];

  getIngredients(){
    this.ingredients = ['eggs', "milk", "flour"];
  }

  ngOnInit(): void {
    this.getIngredients();
  }
}
