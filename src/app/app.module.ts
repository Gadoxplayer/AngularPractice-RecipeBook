import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
// import { RecipesComponent } from './recipes/recipes.component';
// import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
// import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
// import { RecipeItemComponent } from './recipes/recipes-list/recipe-item/recipe-item.component';
// import { ShoppingListComponent } from './shopping-list/shopping-list.component';
// import { ShoopingEditComponent } from './shopping-list/shooping-edit/shooping-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { DropdownDirective } from './shared/dropdown.directive';
// import { ShoppingListService } from './shopping-list/shopping-list.service';
// import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
// import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
// import { RecipeService } from './recipes/recipe.service';
import { HttpClientModule } from '@angular/common/http'
// import { AuthComponent } from './auth/auth.component';
// import { LoadingSpinnerComponent } from './shared/loadingSpinner/loading-spinner.component';
// import { AuhtInterceptorService } from './auth/auth-interceptor.service';
// import { AlertComponent } from './shared/alert/alet.component';
// import { PlaceholderDirective } from './shared/alert/placeholder/placeholder.directive';
// import { RecipesModule } from './recipes/recipes.module';
// import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
// import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // RecipesComponent,
    // RecipesListComponent,
    // RecipeDetailComponent,
    // RecipeItemComponent,
    // ShoppingListComponent,
    // ShoopingEditComponent,
    // DropdownDirective,
    // RecipeStartComponent,
    // RecipeEditComponent,
    // AuthComponent,
    // LoadingSpinnerComponent,
    // AlertComponent,
    // PlaceholderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
  ],
  providers: [
    // ShoppingListService, 
    // RecipeService, 
    // {provide: HTTP_INTERCEPTORS, useClass: AuhtInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
