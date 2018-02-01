import { Component, OnInit } from "@angular/core";
import { SystemModel } from "../../models/systemModel";

@Component({
    selector: "people-check",
    templateUrl: "peopleCheck.html",
    styleUrls: ["./peopleCheck.css"]
})
export class PeopleCheckComponent implements OnInit {
    private systems: SystemModel[] = [{
        isActive: true,
        title: "EtWeb"
    }, {
        isActive: true,
        title: "AD"
    }, {
        isActive: true,
        title: "Maconomy"
    }];

    constructor() { }

    ngOnInit() {
    }
}