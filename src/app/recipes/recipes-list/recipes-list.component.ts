import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  // @Output() recipeWasSeleceted = new EventEmitter<Recipe>();
  // recipes: Recipe[] = [
  //   new Recipe('A test recipe', 'This is simply a test', "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg"),
  //   new Recipe('Another test recipe', 'This is simply a test', "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg"),
  //   new Recipe('Una receta de testeo', 'This is simply a test', "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg")
  // ];
  recipes: Recipe[];
  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.subscription = this.recipeService.recipesChanged
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes;
        }
      );
    this.recipes = this.recipeService.getRecipes();
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  // onRecipeSelected(recipe: Recipe){
  //   this.recipeWasSeleceted.emit(recipe);
  //   console.log(recipe);
    
  // }
}
