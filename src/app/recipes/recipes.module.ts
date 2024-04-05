import { NgModule } from "@angular/core";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeItemComponent } from "./recipes-list/recipe-item/recipe-item.component";
import { RecipesListComponent } from "./recipes-list/recipes-list.component";
import { RecipesComponent } from "./recipes.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RecipesRoutingModule } from "./recipes-routing.module";


@NgModule({
    declarations: [
        RecipesComponent,
        RecipesListComponent,
        RecipeDetailComponent,
        RecipeItemComponent,
        RecipeStartComponent,
        RecipeEditComponent,
    ],
    imports: [
        RouterModule,
        CommonModule, //This would be the borwser module, but it should onlyu be used once and only in the appmodule, the rest recieve this import 
        ReactiveFormsModule,
        RecipesRoutingModule
    ],
    exports: [
        // RecipesComponent,
        // RecipesListComponent,
        // RecipeDetailComponent,
        // RecipeItemComponent,
        // RecipeStartComponent,
        // RecipeEditComponent,
    ]
})
export class RecipesModule {

}