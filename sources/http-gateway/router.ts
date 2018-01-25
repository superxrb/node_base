import * as http from "@litert/http";

import modules = require("./handlers/index");

import { setupCORS } from "../libs/http-kits";

export let router = http.createStandardRouter();

export function setMiddware(): void {
    // for cross-cors
    router.use(async function(context, next) {
        setupCORS(context.request, context.response);
        // then stop middware.
        if (context.request.method === "OPTIONS") {
            await next(true);
        }
        else {
            await next();
        }
    });
}

export function registerRouter(): void {

    for (let moduleName of modules) {

        let apiModule: string[] = require(`./handlers/${moduleName}/index`);

        for (let apiName of apiModule) {

            let apiEntry = require(`./handlers/${moduleName}/api.${apiName}`);

            apiEntry(router);
        }
    }
}