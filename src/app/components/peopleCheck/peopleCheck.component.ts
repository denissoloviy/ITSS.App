import { Component, OnInit } from "@angular/core";

import { SystemModel } from "./models/systemModel";
import { CommonUsersModel, FullEmployee } from "./models/userModels";
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
        title: "EtWeb",
        user: new FullEmployee()
    }, {
        isActive: true,
        title: "AD",
        user: new FullEmployee()
    }, {
        isActive: false,
        title: "Maconomy",
        user: new FullEmployee()
    }];
    private activeSystems: SystemModel[];
    private employeeMaconomyId: string;

    private employeeProperties = Object.keys(new FullEmployee());
    private mismatches: boolean[] = [];

    constructor(private _service: PeopleCheckService) { }

    ngOnInit(): void {
        this.activeSystems = this.systems.filter(x => x.isActive);
        this.fillMismatches();
    }

    private systemChange(title: string): void {
        let system = this.systems.filter(x => x.title === title)[0];
        if (system) {
            system.isActive = !system.isActive;
        }
        this.activeSystems = this.systems.filter(x => x.isActive);
        this.fillMismatches();
    }

    private getUsers(): void {
        this._service.getUsers(this.employeeMaconomyId).then(data => {
            for (let system of this.systems) {
                system.user = this.getUserBySystem(system.title, data);
            }
            this.fillMismatches();
        });
    }

    private getUserBySystem(systemName: string, users: CommonUsersModel): FullEmployee {
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

    private fillMismatches(): void {
        this.mismatches = [];
        for (let property of this.employeeProperties) {
            this.mismatches.push(this.isMismatch(property));
        }
    }

    private isMismatch(property: string): boolean {
        if (this.activeSystems.length <= 1) {
            return false;
        }
        let firstValue = this.activeSystems[0];
        for (let system of this.activeSystems) {
            if (firstValue.user[property] !== system.user[property]) {
                return true;
            }
        }
        return false;
    }
}