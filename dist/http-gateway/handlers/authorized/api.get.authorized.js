"use strict";
const response_1 = require("../../response");
const global_1 = require("../../../config/global");
const country_1 = require("../../../model/country");
module.exports = function (router) {
    router.get("/v1.0/amazon/ads/{countryCode:string}/authorized", async function (context) {
        let resp = new response_1.Response();
        let countryCode = context.request.params["countryCode"];
        if (global_1.REGION.indexOf(countryCode) === -1) {
            resp.genError(401, response_1.ErrorCode.PARAM_ERROR, "country code not found.");
            try {
                let result = await country_1.default.findByCode(countryCode);
                if (result === null) {
                    resp.genError(401, response_1.ErrorCode.RESOURCE_NOT_FOUND, "the country area no authorized.");
                    resp.data = {
                        "url": "https://"
                    };
                    resp.send(context.response);
                    return;
                }
            }
            catch (e) {
                resp.genError(500, response_1.ErrorCode.STORAGE_ERROR, e.toString());
                resp.send(context.response);
                return;
            }
            resp.send(context.response);
            return;
        }
        resp.send(context.response);
    });
};
//# sourceMappingURL=api.get.authorized.js.map