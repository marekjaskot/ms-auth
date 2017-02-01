import {OAuthException} from "./OAuthException";
/**
 * Created by Marek on 19.12.2016.
 */
export class InvalidTokenException extends OAuthException {
    public name = 'InvalidTokenException';
}