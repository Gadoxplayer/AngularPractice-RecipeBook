import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core"
import { BehaviorSubject, Subject, catchError, tap, throwError } from "rxjs";
import { UserModel } from "./user.model";
import { Router } from "@angular/router";

export interface AuthResponseData{
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string;
    localId: string;
    registered?: boolean;
}

@Injectable({providedIn: 'root'})
export class AuthService {

    user = new BehaviorSubject<UserModel>(null);
    // token: string = null;

    constructor(private http: HttpClient, private router: Router) {}

    signUp(email: string, password: string) {
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyASl6Y0ZCI3jey4dMII8Qae-SaQHt1yjWE',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(catchError(this.handleError), tap(respData => {
            this.hanldeAuth(respData.email, respData.localId, respData.idToken, +respData.expiresIn)
        }));
    }

    logIn(email: string, password: string) {
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyASl6Y0ZCI3jey4dMII8Qae-SaQHt1yjWE',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(catchError(this.handleError), tap(respData => {
            this.hanldeAuth(respData.email, respData.localId, respData.idToken, +respData.expiresIn)
        }));
    }

    private hanldeAuth(email: string, userId: string, token: string, expiresIn: number) {
        const expDate = new Date(new Date().getTime() + expiresIn * 1000);
        const user = new UserModel(email, userId, token, expDate);
        console.log(user);
        
        this.user.next(user);
    }

    logOut() {
       this.user.next(null);
       this.router.navigate(['./auth']);
    }

    private handleError(errorResp: HttpErrorResponse) {
        let errorMessage = 'An unknown error ocurred!';
        console.log(errorResp);
        
            if (!errorResp.error || !errorResp.error.error) {
                return throwError(errorMessage);
            }
            switch (errorResp.error.error.message) {
                case 'EMAIL_EXISTS':
                    errorMessage = 'This email already exists!';
                    break;
                case 'EMAIL_NOT_FOUND':
                    errorMessage = 'This email does not exists!';
                    break;
                case 'INVALID_LOGIN_CREDENTIALS':
                    errorMessage = 'This credentials are not correct!';
                    break;  
                case 'USER_DISABLED':
                    errorMessage = 'This credentials are not correct, user is disabled';
                    break;  
            }
            return throwError(errorMessage);
    }
}