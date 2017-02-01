"use strict";
/**
 * Created by Marek on 21.12.2016.
 */
var AuthorizationServer = (function () {
    function AuthorizationServer() {
        this.grantHandlers = [];
    }
    AuthorizationServer.prototype.registAuthorizeGrantType = function (grantType) {
        this.grantHandlers.push(grantType);
    };
    AuthorizationServer.prototype.authorize = function (request) {
        var requestType;
        if (request.type === 'AuthorizationRequest') {
            requestType = request.responseType;
        }
        else if (request.type === 'AccessTokenRequest') {
            requestType = request.grantType;
        }
        else {
            throw new Error('Invalid request grant_type or response_type');
        }
        for (var _i = 0, _a = this.grantHandlers; _i < _a.length; _i++) {
            var handler = _a[_i];
            console.log('handler grandtype', handler.getGrantType());
            if (handler.getGrantType() == requestType) {
                console.log('jeeeeee pyta handlera');
                handler.authorize(request);
            }
        }
    };
    return AuthorizationServer;
}());
exports.AuthorizationServer = AuthorizationServer;
//# sourceMappingURL=AuthorizationServer.js.map