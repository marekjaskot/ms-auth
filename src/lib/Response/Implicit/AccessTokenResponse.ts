/**
 * Created by Marek on 20.12.2016.
 *
 *
 * For example, the authorization server redirects the user-agent by
 * sending the following HTTP response (with extra line breaks for
 * display purposes only):
 *
 * HTTP/1.1 302 Found
 * Location: http://example.com/cb#access_token=2YotnFZFEjr1zCsicMWpAA
 * &state=xyz&token_type=example&expires_in=3600

 */

export class AccessTokenResponse{

    constructor(public accessToken:string, public tokenType:string, public expiresIn:string = null, public scope:string[] = null, public state:string = null){}
}