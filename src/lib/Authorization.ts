import {AccessTokenInterface} from "./TokenType/AccessTokenInterface";
import {AuthorizationGrantTypeInterface} from "./GrantType/AuthorizationGrantTypeInterface";
/**
 * Created by Marek on 19.12.2016.
 */
export class Authorization {
    constructor(protected token: AccessTokenInterface, protected grantType: AuthorizationGrantTypeInterface){

    }

    public authorize(){
        this.token.generateToken()

    }
}