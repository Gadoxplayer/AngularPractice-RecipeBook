import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  // @Output() recipeWasSeleceted = new EventEmitter<Recipe>();
  // recipes: Recipe[] = [
  //   new Recipe('A test recipe', 'This is simply a test', "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg"),
  //   new Recipe('Another test recipe', 'This is simply a test', "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg"),
  //   new Recipe('Una receta de testeo', 'This is simply a test', "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg")
  // ];
  recipes: Recipe[];
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  // onRecipeSelected(recipe: Recipe){
  //   this.recipeWasSeleceted.emit(recipe);
  //   console.log(recipe);
    
  // }
}
