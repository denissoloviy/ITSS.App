import { Component, OnInit } from "@angular/core";

import { ServiceCaller } from "../../_common/services/serviceCaller";
import { SystemModel } from "./models/systemModel";
import { Employee } from "./models/commonUserModel";

@Component({
    selector: "people-check",
    templateUrl: "peopleCheck.html",
    styleUrls: ["./peopleCheck.css"]
})
export class PeopleCheckComponent implements OnInit {
    private employee: Employee = {
        LoginId: "value",
        FirstName: "value",
        LastName: "value",
        MaconomyEmployeeNumber: "value",
        EtWebCompanyId: 1,
        EtWebDepartmentId: 1,
        EtWebTeamId: 1,
        SupervisorMaconomyID: "value",
        EmailJob: "value",
        JobTitle: "value",
        Name: "value"
    };
    private systems: SystemModel[] = [{
        isActive: true,
        title: "EtWeb",
        user: this.employee
    }, {
        isActive: false,
        title: "AD"
    }, {
        isActive: true,
        title: "Maconomy"
    }];
    private activeSystems: SystemModel[];
    private employeeMaconomyId: string;

    private employeeProperties = Object.keys(this.employee);

    // constructor(private _service: ServiceCaller) { }

    ngOnInit(): void {
        this.activeSystems = this.systems.filter(x => x.isActive);
    }

    public systemChange(title: string): void {
        let system = this.systems.filter(x => x.title === title)[0];
        if (system) {
            system.isActive = !system.isActive;
        }
        this.activeSystems = this.systems.filter(x => x.isActive);
    }

    // public getUser(): void {

    // }
}