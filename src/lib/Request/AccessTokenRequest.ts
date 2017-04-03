/**
 * Created by Marek on 04.04.2017.
 */
import {AccessTokenRequestInterface} from "./AccessTokenRequestInterface";

export class AccessTokenRequest implements AccessTokenRequestInterface {
    type:string = 'AccessTokenRequest';

    /**
     * @param grantType {string} - REQUIRED.  Value MUST be set to "authorization_code".
     * @param clientId {string} - REQUIRED, if the client is not authenticating with the authorization server
     * @param redirectUri {string} - REQUIRED, if the "redirect_uri" parameter was included in the authorization request
     * @param code {string} - REQUIRED.  The authorization code received from the authorization server.
     */
    constructor(public clientId:string, public redirectUri:string = null, public code:string = null, public grantType = 'authorization_code' ){}

}