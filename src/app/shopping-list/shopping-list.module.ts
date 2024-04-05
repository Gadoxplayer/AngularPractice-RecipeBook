import { NgModule } from "@angular/core";
import { ShoopingEditComponent } from "./shooping-edit/shooping-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoopingEditComponent,
    ],
    imports: [
        RouterModule.forChild([
            { path: 'shopping-list', component: ShoppingListComponent },
        ]),
        CommonModule, //This would be the borwser module, but it should onlyu be used once and only in the appmodule, the rest recieve this import 
        FormsModule
    ]
})
export class ShoppingListModule {}