import { Injectable } from "@angular/core";

import { ServiceCaller } from "../../../_common/services/serviceCaller";
import { Employee, CommonUsersModel } from "../models/userModels";

@Injectable()
export class PeopleCheckService {
    constructor(private _service: ServiceCaller) { }

    public getUsers(maconomyId: string): Promise<CommonUsersModel> {
        return new Promise<CommonUsersModel>(resolve => {
            let promises: Promise<any>[] = [];
            let tempEtWeb;
            let tempAD = new Employee();
            let tempMaconomy = new Employee();
            promises.push(this.getEtWebUser(maconomyId).then(data => tempEtWeb = data));

            Promise.all(promises).then(() => {
                resolve(
                    {
                        etWebUser: tempEtWeb,
                        adUser: tempAD,
                        maconomyUser: tempMaconomy
                    });
            });
        });
    }


    getEtWebUser(maconomyId: string): Promise<Employee> {
        return this._service.get("EtWeb", "GetEmployeeByMaconomyID", {
            maconomyId: maconomyId
        });
    }
}