import * as http from "@litert/http";

import { ErrorCode, Response } from "../../response";

import { REGION } from "../../../config/global";

import country from "../../../model/country";

export = function(router: http.StandardRouter) {
    router.get("/v1.0/amazon/ads/{countryCode:string}/authorized",
    async function(context) {
        let resp = new Response();
        let countryCode = context.request.params["countryCode"];

        if (REGION.indexOf(countryCode) === -1) {

          resp.genError(401,
                        ErrorCode.PARAM_ERROR,
                        "country code not found."
          );
          try {
            let result = await country.findByCode(countryCode);

            if (result === null) {
               resp.genError(401,
                        ErrorCode.RESOURCE_NOT_FOUND,
                        "the country area no authorized."
               );
               resp.data = {
                   "url": "https://"
               };
               resp.send(context.response);
               return;
            }
          } catch (e) {
              resp.genError(500,
                        ErrorCode.STORAGE_ERROR,
                        e.toString()
               );
               resp.send(context.response);
               return;
          }

          resp.send(context.response);
          return;
        }


        resp.send(context.response);
    });
};