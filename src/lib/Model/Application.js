"use strict";
/**
 * Created by Marek on 19.12.2016.
 */
var Application = (function () {
    function Application(id, secret) {
        this.id = id;
        this.secret = secret;
    }
    Application.prototype.getId = function () {
        return this.id;
    };
    Application.prototype.getSecret = function () {
        return this.secret;
    };
    return Application;
}());
exports.Application = Application;
//# sourceMappingURL=Application.js.map