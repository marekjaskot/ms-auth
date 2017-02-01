"use strict";
/**
 * Created by Marek on 19.12.2016.
 */
var Authorization = (function () {
    function Authorization(token, grantType) {
        this.token = token;
        this.grantType = grantType;
    }
    Authorization.prototype.authorize = function () {
        this.token.generateToken();
    };
    return Authorization;
}());
exports.Authorization = Authorization;
//# sourceMappingURL=Authorization.js.map