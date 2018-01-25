import redis = require("./libs/redis");
import { REDIS_CONFIG } from "./config/db";
import { httpBoot } from "./http-gateway/server";
import mysql from "./libs/mysql";


(async() => {
    try {
        // 1. connect redis.
        await redis.connect(REDIS_CONFIG);
        console.log("connect redis ok!");
        // 2.init mysql and models.
        mysql.init();
        console.log("mysql initial ok!");
        // 3.start the server.
        await httpBoot();
        console.log("start http server ok!");

    } catch (e) {
        console.log(e);
        console.log("error:" + e);
    }

})();