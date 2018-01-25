"use strict";
const response_1 = require("../../response");
const global_1 = require("../../../config/global");
module.exports = function (router) {
    router.get("/v1.0/amazon/ads/countryCodes", async function (context) {
        let resp = new response_1.Response();
        resp.data = global_1.REGION;
        resp.send(context.response);
    });
};
//# sourceMappingURL=api.get.countryCodes.js.map