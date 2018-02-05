import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { EnvService } from "./envService";
import { ToastrService } from "./toastrService";

@Injectable()
export class ServiceCaller {

    constructor(private _http: HttpClient,
        private _toastr: ToastrService,
        private _envService: EnvService) {
    }

    put(controller: string, method: string, data: any): Promise<any> {
        return this._invoke(controller, method, "PUT", data);
    }

    post(controller: string, method: string, data: any): Promise<any> {
        return this._invoke(controller, method, "POST", data);
    }

    delete(controller: string, method: string, data: any): Promise<any> {
        return this._invoke(controller, method, "DELETE", data);
    }

    get(controller: string, method: string, data: any): Promise<any> {
        return this._invoke(controller, method, "GET", data);
    }

    private _invoke(controller: string, method: string, type: string, data: any): Promise<any> {
        let isGet = type.toLowerCase() === "get" || type.toLowerCase() === "put";

        let url = this._getUrl(controller, method, data, isGet);

        return new Promise<any>((resolve, reject) => {
            const request = this._http.request(type, url, {
                headers: this._getHeaders(),
                body: !isGet ? JSON.stringify(data) : null
            });

            request.subscribe(
                response => resolve(response),
                err => {
                    let errorDisplayTime = (err.name === "TimeoutError") ? 0 : 15000;
                    this._toastr.error(err.error.ExceptionMessage || err.message, errorDisplayTime);
                    console.error(err);
                    reject();
                });
        });
    }

    private _getUrl(controller: string, method: string, data: any, isGet: boolean): string {
        let url = this._envService.currEnv.serviceUrl + controller + "/" + method;
        if (isGet) {
            url += "?" + this._getParameters(data);
        }
        return url;
    }

    private _getParameters(data: any): string {
        let urlParams = "";
        for (let field in data) {
            if (data[field] || typeof (data[field]) === "boolean") {
                if (Object.prototype.toString.call(data[field]) === "[object Array]") {
                    let array = data[field];
                    for (let i = 0; i < array.length; i++) {
                        urlParams = this._addParam(urlParams, field, array[i]);
                    }
                } else {
                    urlParams = this._addParam(urlParams, field, data[field]);
                }
            }
        }
        return urlParams;
    }

    private _addParam(urlParams: string, field: string, value: string): string {
        if (urlParams !== "") {
            urlParams += "&";
        }
        urlParams += field + "=" + value;
        return urlParams;
    }

    private _getHeaders(): HttpHeaders {
        const headers: HttpHeaders = new HttpHeaders();

        return headers.append("Content-Type", "application/json; charset=utf-8");
    }
}
