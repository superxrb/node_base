"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function setupCORS(req, resp) {
    resp.setHeader("X-Powered-By", "Reolink-SMS/v1.0");
    resp.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,PATCH,OPTIONS,HEAD");
    resp.setHeader("Access-Control-Allow-Credentials", "true");
    resp.setHeader("Access-Control-Allow-Origin", req.headers["origin"] ? req.headers["origin"] : "*");
    resp.setHeader("Access-Control-Allow-Headers", "accept, Content-Type, auth-code");
}
exports.setupCORS = setupCORS;
//# sourceMappingURL=http-kits.js.map