import {AuthorizationGrantTypeInterface} from "./AuthorizationGrantTypeInterface";
/**
 * Created by Marek on 21.12.2016.
 */
export class AuthorizationCode implements AuthorizationGrantTypeInterface{
    constructor(public grantType:string ='code'){}

    authorize(request) {
        console.log('uuuuuuuuuuu:)')
    }

    getGrantType(){
        return this.grantType;
    }

}