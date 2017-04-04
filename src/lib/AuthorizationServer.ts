import {AuthorizationGrantTypeInterface} from "./GrantType/AuthorizationGrantTypeInterface";
/**
 * Created by Marek on 21.12.2016.
 */

export class AuthorizationServer {
    protected grantHandlers = [];

    public registAuthorizeGrantType(grantType:AuthorizationGrantTypeInterface){
        this.grantHandlers.push(grantType);
    }

    public authorize(request){
        let requestType;

        if (request.type === 'AuthorizationRequest'){
            requestType = request.responseType;
        } else if (request.type === 'AccessTokenRequest'){
            requestType = request.grantType;
        } else {
            throw new Error('Invalid request grant_type or response_type');
        }

        for(let handler of this.grantHandlers){
            console.log('handler grandtype',handler.getGrantType());
            if(handler.getGrantType() == requestType){
                console.log('jeeeeee pyta handlera')
                handler.authorize(request)
            }

        }
    }
    public setModel() {
    }


}
