import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient-model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe('A test recipe', 
                    'This is simply a test', 
                    "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg", 
                    [new Ingredient("meat", 5), 
                    new Ingredient("bananas", 4) ]),
        new Recipe('Another test recipe', 
                    'This is simply a test', 
                    "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg",
                    [
                      new Ingredient("candy", 5), 
                      new Ingredient("beer", 4) 
                    ]),
        new Recipe('Una receta de testeo', 
                    'This is simply a test', 
                    "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg", 
                    [
                      new Ingredient("buns", 2), 
                      new Ingredient("wine", 40) 
                    ])
      ];

      constructor(private slService: ShoppingListService) { }

      getRecipes() {
        return this.recipes.slice();
      }

      getRecipe(index: number) {
        return this.recipes[index];
      }

      addIngredientToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }
}