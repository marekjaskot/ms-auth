import {AuthorizationRequestInterface} from "./AuthorizationRequestInterface";
/**
 * Created by Marek on 21.12.2016.
 */
export class AuthorizationRequest implements AuthorizationRequestInterface{
    type:string = 'AuthorizationRequest';
    constructor(public responseType:string, public clientId:string, public redirectUri:string = null, public scope:string[] = null, public state:string = null){}

}