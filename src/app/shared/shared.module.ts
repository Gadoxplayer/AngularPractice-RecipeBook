import { NgModule } from "@angular/core";
import { DropdownDirective } from "./dropdown.directive";
import { AlertComponent } from "./alert/alet.component";
import { LoadingSpinnerComponent } from "./loadingSpinner/loading-spinner.component";
import { PlaceholderDirective } from "./alert/placeholder/placeholder.directive";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        DropdownDirective,
        AlertComponent,
        LoadingSpinnerComponent,
        PlaceholderDirective
    ],
    imports: [CommonModule],
    exports: [
        DropdownDirective,
        AlertComponent,
        LoadingSpinnerComponent,
        PlaceholderDirective,
        CommonModule
    ],
})
export class SharedModule { }