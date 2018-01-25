import * as http from "@litert/http";

import { ErrorCode, Response } from "../../response";

import { REGION } from "../../../config/global";

export = function(router: http.StandardRouter) {
    router.get("/v1.0/amazon/ads/countryCodes",
    async function(context) {

        let resp = new Response();

        resp.data = REGION;

        resp.send(context.response);
    });
};