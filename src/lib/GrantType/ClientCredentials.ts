import {AuthorizationGrantTypeInterface} from "./AuthorizationGrantTypeInterface";
/**
 * Created by Marek on 19.12.2016.
 */
export class ClientCredentials implements AuthorizationGrantTypeInterface {
    constructor(public grantType:string ='client_credentials'){}
    authorize(request) {
    }

    getGrantType(){
       return this.grantType;
    }


}
