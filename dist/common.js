"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@litert/core");
class AdsException extends core_1.Exception {
    constructor(code, msg) {
        super(code, msg);
        this._type = "sms";
    }
    toString() {
        return `Error ${this.code}: ${this.message}.`;
    }
}
exports.AdsException = AdsException;
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["SUCCESS"] = 0] = "SUCCESS";
    ErrorCode[ErrorCode["API_NOT_FOUND"] = 1] = "API_NOT_FOUND";
    ErrorCode[ErrorCode["RESOURCE_NOT_FOUND"] = 2] = "RESOURCE_NOT_FOUND";
    ErrorCode[ErrorCode["NOT_AUTHORIZED"] = 3] = "NOT_AUTHORIZED";
    ErrorCode[ErrorCode["STORAGE_ERROR"] = 4] = "STORAGE_ERROR";
    ErrorCode[ErrorCode["NETWORK_ERROR"] = 5] = "NETWORK_ERROR";
    ErrorCode[ErrorCode["SYSTEM_ERROR"] = 6] = "SYSTEM_ERROR";
    ErrorCode[ErrorCode["INVALID_REQUEST"] = 7] = "INVALID_REQUEST";
    ErrorCode[ErrorCode["ACCESS_DENNY"] = 8] = "ACCESS_DENNY";
    ErrorCode[ErrorCode["TIMEOUT_ERROR"] = 9] = "TIMEOUT_ERROR";
    ErrorCode[ErrorCode["DUPLICATED"] = 10] = "DUPLICATED";
    ErrorCode[ErrorCode["PARAM_ERROR"] = 11] = "PARAM_ERROR";
    ErrorCode[ErrorCode["REQUEST_ALI_ERROR"] = 12] = "REQUEST_ALI_ERROR";
})(ErrorCode = exports.ErrorCode || (exports.ErrorCode = {}));
class DependencyContainer {
}
exports.DependencyContainer = DependencyContainer;
//# sourceMappingURL=common.js.map