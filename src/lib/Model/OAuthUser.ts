/**
 * Created by Marek on 04.04.2017.
 */
export class OAuthUser {
    constructor(public id:number, public email:string, public status:string, public username:string, public password:string, public created:string) {
    }
}