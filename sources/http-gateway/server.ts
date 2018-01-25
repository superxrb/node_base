import * as http from "@litert/http";
import { router, registerRouter, setMiddware} from "./router";
import { RawPromise } from "@litert/core";
import { ErrorCode, AdsException } from "../common";
import { HTTP_SERVER_PORT } from "../config/global";
export let server = http.createServer({

    "port": HTTP_SERVER_PORT,

    "router": router
});

export async function httpBoot(): Promise<void> {

    setMiddware();

    registerRouter();

    server.on("error", () => {
        throw new AdsException(ErrorCode.SYSTEM_ERROR, "Start server error.");
    });
    await server.start();

    return ;
}