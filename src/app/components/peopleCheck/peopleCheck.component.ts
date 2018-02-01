import { Component, OnInit } from "@angular/core";

import { SystemModel } from "./models/systemModel";
import { CommonUsersModel, Employee } from "./models/userModels";
import { PeopleCheckService } from "./services/peopleCheckService";

@Component({
    selector: "people-check",
    templateUrl: "peopleCheck.html",
    styleUrls: ["./peopleCheck.css"],
    providers: [PeopleCheckService]
})
export class PeopleCheckComponent implements OnInit {
    private systems: SystemModel[] = [{
        isActive: true,
        title: "EtWeb"
    }, {
        isActive: false,
        title: "AD"
    }, {
        isActive: true,
        title: "Maconomy"
    }];
    private activeSystems: SystemModel[];
    private employeeMaconomyId: string;

    private employeeProperties = Object.keys(new Employee());

    constructor(private _service: PeopleCheckService) { }

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

    public getUsers(): void {
        this._service.getUsers(this.employeeMaconomyId).then(data => {
            for (let system of this.systems) {
                system.user = this.getUserBySystem(system.title, data);
            }
        });
    }

    private getUserBySystem(systemName: string, users: CommonUsersModel): Employee {
        switch (systemName) {
            case "EtWeb":
                return users.etWebUser;
            case "AD":
                return users.adUser;
            case "Maconomy":
                return users.maconomyUser;
            default:
                break;
        }
    }
}