/**
 * Created by Marek on 20.12.2016.
 *
 *
 *
 *   POST /token HTTP/1.1
 Host: server.example.com
 Authorization: Basic czZCaGRSa3F0MzpnWDFmQmF0M2JW
 Content-Type: application/x-www-form-urlencoded

 grant_type=authorization_code&code=SplxlOBeZQQYbYS6WxSbIA
 &redirect_uri=https%3A%2F%2Fclient%2Eexample%2Ecom%2Fcb

 */
export interface AccessTokenRequestInterface {
    type: 'AccessTokenRequest';
    grantType:string;
    code: string;
    redirectUri: string;
    clientId:string;
}