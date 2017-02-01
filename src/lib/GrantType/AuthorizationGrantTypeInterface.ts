/**
 * Created by Marek on 19.12.2016.
 */
export interface AuthorizationGrantTypeInterface{
   grantType:string;
   authorize(request);
   getGrantType();
}