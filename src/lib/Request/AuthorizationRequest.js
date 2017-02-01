"use strict";
/**
 * Created by Marek on 21.12.2016.
 */
var AuthorizationRequest = (function () {
    function AuthorizationRequest(responseType, clientId, redirectUri, scope, state) {
        if (redirectUri === void 0) { redirectUri = null; }
        if (scope === void 0) { scope = null; }
        if (state === void 0) { state = null; }
        this.responseType = responseType;
        this.clientId = clientId;
        this.redirectUri = redirectUri;
        this.scope = scope;
        this.state = state;
        this.type = 'AuthorizationRequest';
    }
    return AuthorizationRequest;
}());
exports.AuthorizationRequest = AuthorizationRequest;
//# sourceMappingURL=AuthorizationRequest.js.map