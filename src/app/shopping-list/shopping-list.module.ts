import { NgModule } from "@angular/core";
import { ShoopingEditComponent } from "./shooping-edit/shooping-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { LoggingService } from "../logging.service";

const route: Routes = [{ path: '', component: ShoppingListComponent },]
@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoopingEditComponent,
    ],
    imports: [
        RouterModule.forChild(route),
        //CommonModule, //This would be the borwser module, but it should onlyu be used once and only in the appmodule, the rest recieve this import 
        SharedModule,
        FormsModule
    ],
    providers: [
        LoggingService
    ]
})
export class ShoppingListModule {}