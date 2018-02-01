import { Component } from "@angular/core";

import { ProjectDetailsParam } from "./models/projectDetailsParam";
import { ProjectDetailsService } from "./services/projectDetailsService";

@Component({
    selector: "project-details",
    templateUrl: "projectDetails.html",
    styleUrls: ["projectDetails.css"],
    providers: [ProjectDetailsService]
})
export class ProjectDetailsComponent {
    params: ProjectDetailsParam;
    detailsJson = {};

    constructor(private _service: ProjectDetailsService) {
        this.params = new ProjectDetailsParam();
    }

    invokeService(): void {
        this._service.getProjectDetails(this.params).then(data => {
            this.detailsJson = data;
        });
    }
}