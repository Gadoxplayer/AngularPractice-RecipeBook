import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { exhaustMap, map, take, tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(
        'https://ng-practice-ac176-default-rtdb.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchRecipes() {
    // return this.authService.user.pipe(
    //   take(1), 
    //   exhaustMap(user => {
    return this.http.get<Recipe[]>(
      'https://ng-practice-ac176-default-rtdb.firebaseio.com/recipes.json',
      // 'https://ng-practice-ac176-default-rtdb.firebaseio.com/recipes.json?auth=' + user.token,
      // {
      //   params: new HttpParams().set('auth', user.token)
      // }
    ).pipe(
    map(recipes => {
      return recipes.map(recipe => {
        return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
      });
    }),
    tap(recipes => {
      this.recipeService.setRecipes(recipes);
    })
    );
  }

}
