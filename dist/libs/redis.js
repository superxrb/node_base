"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const libRedis = require("redis");
const core_1 = require("@litert/core");
const common_1 = require("../common");
let client;
function connect(REDIS_CONFIG) {
    let ret = new core_1.RawPromise();
    client = libRedis.createClient(REDIS_CONFIG);
    client.on("error", (err) => {
        console.log("eror:" + err);
        return ret.reject(new common_1.AdsException(common_1.ErrorCode.STORAGE_ERROR, "Failed to connect Redis."));
    });
    client.on("connect", () => {
        client.removeAllListeners("connect");
        return ret.resolve();
    });
    return ret.promise;
}
exports.connect = connect;
function redis() {
    return client;
}
exports.redis = redis;
//# sourceMappingURL=redis.js.map