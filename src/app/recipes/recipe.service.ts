import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient-model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

    //recipeSelected = new Subject<Recipe>();
    
    // private recipes: Recipe[] = [
    //     new Recipe('A test recipe', 
    //                 'This is simply a test', 
    //                 "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg", 
    //                 [new Ingredient("meat", 5), 
    //                 new Ingredient("bananas", 4) ]),
    //     new Recipe('Another test recipe', 
    //                 'This is simply a test', 
    //                 "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg",
    //                 [
    //                   new Ingredient("candy", 5), 
    //                   new Ingredient("beer", 4) 
    //                 ]),
    //     new Recipe('Una receta de testeo', 
    //                 'This is simply a test', 
    //                 "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg", 
    //                 [
    //                   new Ingredient("buns", 2), 
    //                   new Ingredient("wine", 40) 
    //                 ])
    //   ];
      
      private recipes: Recipe[] = [];

      constructor(private slService: ShoppingListService) { }

      setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
      }

      getRecipes() {
        return this.recipes.slice();
      }

      getRecipe(index: number) {
        return this.recipes[index];
      }

      addIngredientToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }

      addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
      }

      deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
      }
}