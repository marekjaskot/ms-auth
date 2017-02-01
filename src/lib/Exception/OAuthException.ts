/**
 * Created by Marek on 19.12.2016.
 */
export class OAuthException implements Error{
    public name = 'OAuthException';
    constructor(public message:string){}

    toString(){
        return `${this.name}: ${this.message}`;
    }
}