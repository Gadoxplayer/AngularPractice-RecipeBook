import { Component, EventEmitter, Output, OnInit, OnDestroy } from "@angular/core";
import { DataStorageService } from "../shared/data-storage.service";
import { AuthService } from "../auth/auth.service";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
    // @Output() featureSelected= new EventEmitter<string>();
    isAuthenticated = false;
    collapsed:boolean = true;
    private userSub: Subscription;
    // onSelect(feature: string) {
    // this.featureSelected.emit(feature);
    // }
    constructor(private dataStorageService: DataStorageService, private authService: AuthService) {}

    ngOnInit(): void {
        this.userSub = this.authService.user.subscribe(user => {
            this.isAuthenticated = !user ? false : true; // !!user;
        });
    }

    ngOnDestroy(): void {
        this.userSub.unsubscribe();
    }
    onSaveData() {
        this.dataStorageService.storeRecipes();
    }

    onFetchData() {
        this.dataStorageService.fetchRecipes().subscribe();
    }

    onLogout() {
        this.authService.logOut();
    }
}