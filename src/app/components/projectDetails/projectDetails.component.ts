import { Component, OnInit } from "@angular/core";
import { ProjectDetailsParam } from "./models/projectDetailsParam";

@Component({
    selector: "project-details",
    templateUrl: "projectDetails.html"
})

export class ProjectDetailsComponent implements OnInit {
    params: ProjectDetailsParam;

    constructor() {
        this.params = new ProjectDetailsParam();
    }

    ngOnInit() { }
}