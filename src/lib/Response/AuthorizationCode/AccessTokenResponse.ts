/**
 * Created by Marek on 20.12.2016.
 *
 * HTTP/1.1 200 OK
 * Content-Type: application/json;charset=UTF-8
 * Cache-Control: no-store
 * Pragma: no-cache
 *
 * {
 *  "access_token":"2YotnFZFEjr1zCsicMWpAA",
 *  "token_type":"example",
 *  "expires_in":3600,
 *  "refresh_token":"tGzv3JOkF0XG5Qx2TlKWIA",
 *  "example_parameter":"example_value"
 * }
 *
 */
export class AccessTokenResponse{

    constructor(public accessToken:string, public tokenType:string, public expiresIn:string = null, public scope:string[] = null, public state:string = null){}
}