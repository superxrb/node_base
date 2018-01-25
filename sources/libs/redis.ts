import libRedis = require("redis");

import { REDIS_CONFIG } from "../config/db";

import { IDictionary, RawPromise } from "@litert/core";

import { ErrorCode, AdsException } from "../common";

let client: libRedis.RedisClient;

export function connect(REDIS_CONFIG: IDictionary<any>) {

    let ret = new RawPromise<void, AdsException>();

    client = libRedis.createClient(REDIS_CONFIG);

    client.on("error", (err) => {
        console.log("eror:" + err);
        return ret.reject(new AdsException(ErrorCode.STORAGE_ERROR, "Failed to connect Redis."));
    });

    client.on("connect", () => {
        client.removeAllListeners("connect");
        return ret.resolve();
    });

    return ret.promise;
}

/**
 * This method provides a Redis client object.
 */
export function redis(): libRedis.RedisClient {

    return client;
}