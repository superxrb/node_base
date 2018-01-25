"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("@litert/http");
const router_1 = require("./router");
const common_1 = require("../common");
const global_1 = require("../config/global");
exports.server = http.createServer({
    "port": global_1.HTTP_SERVER_PORT,
    "router": router_1.router
});
async function httpBoot() {
    router_1.setMiddware();
    router_1.registerRouter();
    exports.server.on("error", () => {
        throw new common_1.AdsException(common_1.ErrorCode.SYSTEM_ERROR, "Start server error.");
    });
    await exports.server.start();
    return;
}
exports.httpBoot = httpBoot;
//# sourceMappingURL=server.js.map