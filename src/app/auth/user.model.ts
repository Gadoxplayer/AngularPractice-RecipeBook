export class UserModel {
    constructor(
        public email: string, 
        public id: string, 
        private _token: string, 
        private _tokenExpiratedDate: Date) { }

        get token() {
            if(!this._tokenExpiratedDate || new Date() > this._tokenExpiratedDate) {
                return null;
            }
            return this._token;
        }
}