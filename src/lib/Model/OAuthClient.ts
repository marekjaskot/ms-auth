/**
 * Created by Marek on 19.12.2016.
 */
export class OAuthClient {
    constructor(protected id:number, protected secret:string){

    }

    public getId(){
        return this.id;
    }

    public getSecret(){
        return this.secret;
    }
}