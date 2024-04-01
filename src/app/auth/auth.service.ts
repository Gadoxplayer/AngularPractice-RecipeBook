import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core"
import { catchError, throwError } from "rxjs";

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

    constructor(private http: HttpClient) {}

    signUp(email: string, password: string) {
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyASl6Y0ZCI3jey4dMII8Qae-SaQHt1yjWE',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(catchError(this.handleError));
    }

    logIn(email: string, password: string) {
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyASl6Y0ZCI3jey4dMII8Qae-SaQHt1yjWE',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(catchError(this.handleError));
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