import { Exception } from "@litert/core";
import Sequelize = require("sequelize");
export class AdsException extends Exception {

    public code: number;

    public message: string;
    public constructor(code: number, msg?: string) {

        super(code, msg);
        this._type = "sms";
    }


    public toString(): string {

        return `Error ${this.code}: ${this.message}.`;
    }
}
export enum ErrorCode {

    "SUCCESS",
    "API_NOT_FOUND",
    "RESOURCE_NOT_FOUND",
    "STORAGE_ERROR",
    "NETWORK_ERROR",
    "SYSTEM_ERROR",
    "INVALID_REQUEST",
    "ACCESS_DENNY",
    "TIMEOUT_ERROR",
    "DUPLICATED",
    "PARAM_ERROR",
    "REQUEST_ALI_ERROR"
}

export interface IModelManager {
    initialize(deps: DependencyContainer): void;
    associate(): void;

}

export class DependencyContainer {

    public database: Sequelize.Sequelize;

}