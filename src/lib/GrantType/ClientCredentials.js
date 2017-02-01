"use strict";
/**
 * Created by Marek on 19.12.2016.
 */
var ClientCredentials = (function () {
    function ClientCredentials(grantType) {
        if (grantType === void 0) { grantType = 'client_credentials'; }
        this.grantType = grantType;
    }
    ClientCredentials.prototype.authorize = function (request) {
    };
    ClientCredentials.prototype.getGrantType = function () {
        return this.grantType;
    };
    return ClientCredentials;
}());
exports.ClientCredentials = ClientCredentials;
//# sourceMappingURL=ClientCredentials.js.map