import { ErrorCode } from "../common";

export { ErrorCode };

export class Response {

    public "status": {

        "code": number;

        "detail": string;
    };

    public "http": {

        "code": number;

        "message": string;
    };

    public "data"?: any;

    public constructor(code?: number, message?: string, httpStatus: number = 200, httpMessage: string = "OK") {

        this.http = {
            "code": httpStatus,
            "message": httpMessage
        };

        this.status = {
            "code": code !== undefined ? code : ErrorCode.SUCCESS,
            "detail": message ? message : "OK"
        };
    }

    public genError(httpCode: number,
            statusCode: number,
            statusDetail: string): void {

           this.http.code = httpCode;
           this.http.message = "Error";
           this.status.code = statusCode;
           this.status.detail = statusDetail;
    }

    public toString(): string {

        return JSON.stringify(this);
    }

    public send(obj: any): void {

        let http = this.http;

        delete this.http;

        let data: Buffer = Buffer.from(JSON.stringify(this));
        obj.setHeader("Content-Length", data.length);
        obj.writeHead(http.code, http.message);
        obj.write(data);
    }
}