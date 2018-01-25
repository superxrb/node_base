"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../common");
exports.ErrorCode = common_1.ErrorCode;
class Response {
    constructor(code, message, httpStatus = 200, httpMessage = "OK") {
        this.http = {
            "code": httpStatus,
            "message": httpMessage
        };
        this.status = {
            "code": code !== undefined ? code : common_1.ErrorCode.SUCCESS,
            "detail": message ? message : "OK"
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    send(obj) {
        let http = this.http;
        delete this.http;
        let data = Buffer.from(JSON.stringify(this));
        obj.setHeader("Content-Length", data.length);
        obj.writeHead(http.code, http.message);
        obj.write(data);
    }
}
exports.Response = Response;
//# sourceMappingURL=response.js.map