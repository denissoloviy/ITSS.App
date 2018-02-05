import { Injectable } from "@angular/core";
import { ServiceCaller } from "../../../_common/services/serviceCaller";
import { SaveUrlParams } from "../models/saveUrlParams";

@Injectable()
export class SaveUrlServices {
    constructor(private _service: ServiceCaller) { }

    saveUrl(params: SaveUrlParams) {
        return this._service.put("Maconomy", "SaveUrlToMaconomy", {
            maconomyId: params.maconomyId,
            siteUrl: params.url
        });
    }
}