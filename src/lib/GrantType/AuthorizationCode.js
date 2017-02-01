"use strict";
/**
 * Created by Marek on 21.12.2016.
 */
var AuthorizationCode = (function () {
    function AuthorizationCode(grantType) {
        if (grantType === void 0) { grantType = 'code'; }
        this.grantType = grantType;
    }
    AuthorizationCode.prototype.authorize = function (request) {
        console.log('uuuuuuuuuuu:)');
    };
    AuthorizationCode.prototype.getGrantType = function () {
        return this.grantType;
    };
    return AuthorizationCode;
}());
exports.AuthorizationCode = AuthorizationCode;
//# sourceMappingURL=AuthorizationCode.js.map