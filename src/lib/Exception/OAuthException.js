"use strict";
/**
 * Created by Marek on 19.12.2016.
 */
var OAuthException = (function () {
    function OAuthException(message) {
        this.message = message;
        this.name = 'OAuthException';
    }
    OAuthException.prototype.toString = function () {
        return this.name + ": " + this.message;
    };
    return OAuthException;
}());
exports.OAuthException = OAuthException;
//# sourceMappingURL=OAuthException.js.map