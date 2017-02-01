"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OAuthException_1 = require("./OAuthException");
/**
 * Created by Marek on 19.12.2016.
 */
var InvalidTokenException = (function (_super) {
    __extends(InvalidTokenException, _super);
    function InvalidTokenException() {
        var _this = _super.apply(this, arguments) || this;
        _this.name = 'InvalidTokenException';
        return _this;
    }
    return InvalidTokenException;
}(OAuthException_1.OAuthException));
exports.InvalidTokenException = InvalidTokenException;
//# sourceMappingURL=InvalidTokenException.js.map