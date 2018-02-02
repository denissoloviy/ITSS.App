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

                    tempEtWeb.HireDate = this.convertDate(tempEtWeb.HireDate);
                    tempEtWeb.BirthDate = this.convertDate(tempEtWeb.BirthDate);
                    tempAD.HireDate = this.convertDate(tempAD.HireDate);
                    tempAD.BirthDate = this.convertDate(tempAD.BirthDate);
                    tempMaconomy.HireDate = this.convertDate(tempMaconomy.HireDate);
                    tempMaconomy.BirthDate = this.convertDate(tempMaconomy.BirthDate);
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
        // return new Promise<FullEmployee>(resolve => {
        //     let promises: Promise<any>[] = [];
        //     let tempFullEmployee: FullEmployee;
        //     let tempEmployee: Employee;
        //     let companies: ItemModel[];
        //     let departments: ItemModel[];

        //     promises.push(this._service.get("EtWeb", "GetEmployeeInfoByMaconomyId", {
        //         maconomyId: maconomyId
        //     }).then(data => tempFullEmployee = data));

        //     promises.push(this._service.get("EtWeb", "GetEmployeeByMaconomyID", {
        //         maconomyId: maconomyId
        //     }).then(data => tempEmployee = data));

        //     promises.push(this._service.get("EtWeb", "GetCompanies", {}).then(data => companies = data));

        //     promises.push(this._service.get("EtWeb", "GetDepartments", {
        //         companyId: tempEmployee.EtWebCompanyId
        //     }).then(data => departments = data));

        //     Promise.all(promises).then(() => {
        //         tempFullEmployee.EtWebCompanyId = tempEmployee.EtWebCompanyId;
        //         tempFullEmployee.EtWebDepartmentId = tempEmployee.EtWebDepartmentId;
        //         tempFullEmployee.EtWebTeamId = tempEmployee.EtWebTeamId;
        //         tempFullEmployee.JobTitle = tempEmployee.JobTitle;
        //         tempFullEmployee.SupervisorMaconomyID = tempEmployee.SupervisorMaconomyID;

        //         tempFullEmployee.CompanyName = companies.filter(x => x.Id === tempEmployee.EtWebCompanyId)[0].Name;
        //         tempFullEmployee.DepartmentName = departments.filter(x => x.Id === tempEmployee.EtWebDepartmentId)[0].Name;

        //         resolve(tempFullEmployee);
        //     });
        // });
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

    convertDate(date: string) {
        let ddate = new Date(date);
        let yyyy = ddate.getFullYear().toString();
        let mm = (ddate.getMonth() + 1).toString();
        let dd = ddate.getDate().toString();

        return this.increaseStringTo(yyyy, 4) + "-" + this.increaseStringTo(mm, 2) + "-" + this.increaseStringTo(dd, 2);
    }

    increaseStringTo(str: string, length: number): string {
        while (str.length < length) {
            str = "0" + str;
        }
        return str;
    }
}