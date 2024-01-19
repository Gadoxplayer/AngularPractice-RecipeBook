import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  //providers: [RecipeService] fixes issue when navigating away and the data wont get lost anymore, Now if you provide your service inside your module, it will be global and if you have two instance of your component, they will share the same instance of the service.
})
export class RecipesComponent implements OnInit {
  //recipeReceived: Recipe;
  constructor() { }

  ngOnInit(): void {
    // this.recipeService.recipeSelected
    //   .subscribe(
    //     (recipe: Recipe) => {
    //       this.recipeReceived = recipe;
    //     }
    //   );
  }

}
