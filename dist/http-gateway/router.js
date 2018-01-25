"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("@litert/http");
const modules = require("./handlers/index");
const http_kits_1 = require("../libs/http-kits");
exports.router = http.createStandardRouter();
function setMiddware() {
    exports.router.use(async function (context, next) {
        http_kits_1.setupCORS(context.request, context.response);
        if (context.request.method === "OPTIONS") {
            await next(true);
        }
        else {
            await next();
        }
    });
}
exports.setMiddware = setMiddware;
function registerRouter() {
    for (let moduleName of modules) {
        let apiModule = require(`./handlers/${moduleName}/index`);
        for (let apiName of apiModule) {
            let apiEntry = require(`./handlers/${moduleName}/api.${apiName}`);
            apiEntry(exports.router);
        }
    }
}
exports.registerRouter = registerRouter;
//# sourceMappingURL=router.js.map