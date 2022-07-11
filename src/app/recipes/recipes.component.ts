import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from './recipe.model';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  @Input() recipeDet: Recipe;
  
  constructor() { }

  ngOnInit(): void {
  }
  onSetRecipe(recipe){
    this.recipeDet = recipe
    console.log('log of recepi in recipe component'+ recipe);
    console.log('log of recepi detected in recepi component'+this.recipeDet);
    
  }
}
