import { Component, ComponentFactoryResolver, OnDestroy, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthResponseData, AuthService } from "./auth.service";
import { Observable, Subscription } from "rxjs";
import { Router } from "@angular/router";
import { AlertComponent } from "../shared/alert/alet.component"; 
import { PlaceholderDirective } from "../shared/alert/placeholder/placeholder.directive";


@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent implements OnDestroy {
    isLoginMode: boolean = true;
    isLoading: boolean = false;
    error: string = null;
    @ViewChild(PlaceholderDirective, { static: false }) alertHosty: PlaceholderDirective;
    private closeSub: Subscription;

    constructor(private authService: AuthService, private router: Router, private componentFactoryResolver: ComponentFactoryResolver) { }

    onSwithcMode() {
        this.isLoginMode = !this.isLoginMode;
    }
    onSubmit(form: NgForm) {
        if (!form.valid) {
            return;
        }

        const email = form.value.email;
        const password = form.value.password;

        let authObs: Observable<AuthResponseData>;

        this.isLoading = true;
        if (this.isLoginMode) {
            authObs = this.authService.logIn(email, password);
        } else {
            authObs = this.authService.signUp(email, password);
        }
        authObs.subscribe(
            resData => {
            console.log(resData);
            this.isLoading = false;
            this.error = null;
            this.router.navigate(['/recipes']);
            },
            errorMessage => {
                console.log(errorMessage);
                this.error = errorMessage;
                this.showErrorAlert(errorMessage);
                this.isLoading = false;
            }
        );
        form.reset();
    }  

    onHandleError() {
        this.error = null;
    }

    private showErrorAlert(message: string) {
        const alertcomponentFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
        const hostViewContainerRef = this.alertHosty.viewcontainerRef;
        hostViewContainerRef.clear();
        
        const componentRef = hostViewContainerRef.createComponent(alertcomponentFactory);

        componentRef.instance.message = message;

        this.closeSub = componentRef.instance.close.subscribe(() => {
            this.closeSub.unsubscribe();
            hostViewContainerRef.clear();
        });
    }

    ngOnDestroy(): void {
        if(this.closeSub) {
            this.closeSub.unsubscribe();
        }
    }
}