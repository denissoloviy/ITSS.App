import { Injectable } from "@angular/core";

import { ServiceCaller } from "../../../_common/services/serviceCaller";
import { CommonUsersModel } from "../models/userModels";
import { FullEmployee } from "./../models/userModels";

@Injectable()
export class PeopleCheckService {
    constructor(private _service: ServiceCaller) { }

    public getUsers(maconomyId: string): Promise<CommonUsersModel> {
        return new Promise<CommonUsersModel>(resolve => {
            let promises: Promise<any>[] = [];
            let tempEtWeb: FullEmployee;
            let tempAD: FullEmployee;
            let tempMaconomy: FullEmployee;
            promises.push(this.getEtWebUser(maconomyId).then(data => tempEtWeb = data));
            promises.push(this.getMaconomyUser(maconomyId).then(data => tempMaconomy = data));

            Promise.all(promises).then(() => {
                this.getADUser(tempEtWeb.LoginId).then(data => {
                    tempAD = data;

                    this.setupDates(tempEtWeb);
                    this.setupDates(tempAD);
                    this.setupDates(tempMaconomy);
                    resolve(
                        {
                            etWebUser: tempEtWeb,
                            adUser: tempAD,
                            maconomyUser: tempMaconomy
                        });
                });
            });
        });
    }


    getEtWebUser(maconomyId: string): Promise<FullEmployee> {
        return this._service.get("EtWeb", "GetEmployeeInfoByMaconomyId", {
            maconomyId: maconomyId
        });
    }

    getADUser(loginId: string): Promise<FullEmployee> {
        return this._service.get("AD", "GetUserInfo", {
            loginId: loginId
        });
    }

    getMaconomyUser(maconomyId: string): Promise<FullEmployee> {
        return this._service.get("Maconomy", "GetEmployee", {
            maconomyId: maconomyId
        });
    }

    setupDates(obj: { HireDate: string, BirthDate: string }) {
        obj.HireDate = this.convertDate(obj.HireDate);
        obj.BirthDate = this.convertDate(obj.BirthDate);
    }

    convertDate(date: string): string {
        let ddate = new Date(date);
        let yyyy = ddate.getFullYear().toString();
        let mm = (ddate.getMonth() + 1).toString();
        let dd = ddate.getDate().toString();

        return yyyy + "-" + this.increaseStringTo(mm, 2) + "-" + this.increaseStringTo(dd, 2);
    }

    increaseStringTo(str: string, length: number): string {
        while (str.length < length) {
            str = "0" + str;
        }
        return str;
    }
}