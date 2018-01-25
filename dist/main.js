"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redis = require("./libs/redis");
const db_1 = require("./config/db");
const server_1 = require("./http-gateway/server");
const mysql_1 = require("./libs/mysql");
(async () => {
    try {
        await redis.connect(db_1.REDIS_CONFIG);
        console.log("connect redis ok!");
        mysql_1.default.init();
        console.log("mysql initial ok!");
        await server_1.httpBoot();
        console.log("start http server ok!");
    }
    catch (e) {
        console.log(e);
        console.log("error:" + e);
    }
})();
//# sourceMappingURL=main.js.map