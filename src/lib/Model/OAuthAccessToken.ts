/**
 * Created by Marek on 04.04.2017.
 */

export class OAuthAccessToken{
    constructor(public id:number, public clientId:string, public refreshToken:string, public issuedAt:string, public expiresIn:string, public expiredAt:string, scopes:string) {
    }

}
