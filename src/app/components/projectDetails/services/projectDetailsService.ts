import { Injectable } from "@angular/core";

import { ServiceCaller } from "../../../_common/services/serviceCaller";
import { ProjectDetailsParam } from "../models/projectDetailsParam";

@Injectable()
export class ProjectDetailsService {
    constructor(private _service: ServiceCaller) { }

    getProjectDetails(param: ProjectDetailsParam): Promise<string> {
        return this._service.get("spo", "getprojectdetails", {
            maconomyId: param.maconomyId,
            managerRequired: param.checkManager
        });
    }
}