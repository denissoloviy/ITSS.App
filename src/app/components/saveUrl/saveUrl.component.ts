import { Component } from "@angular/core";
import { SaveUrlParams } from "./models/saveUrlParams";
import { SaveUrlServices } from "./services/saveUrlService";
import { ToastrService } from "../../_common/services/toastrService";

@Component({
    selector: "save-url",
    templateUrl: "saveUrl.html",
    providers: [SaveUrlServices]
})
export class SaveUrlComponent {

    params: SaveUrlParams;

    constructor(private _service: SaveUrlServices,
        private _toastr: ToastrService) {
        this.params = new SaveUrlParams();
    }

    invokeService() {
        this._service.saveUrl(this.params).then(() => this._toastr.success("Url was saved."));
    }
}