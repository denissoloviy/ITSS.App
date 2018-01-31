import { Injectable } from "@angular/core";
import * as toastr from "toastr";

@Injectable()
export class ToastrWrapper {

    constructor() {
        toastr.options.closeButton = false;
        toastr.options.hideMethod = "fadeOut";
        toastr.options.hideEasing = "swing";
        toastr.options.timeOut = 4000;
        toastr.options.hideDuration = 200;
        toastr.options.newestOnTop = false;
    }

    error(msg: string, timeout: number = 15000): void {
        toastr.error(msg, "Error", {
            closeButton: true,
            timeOut: timeout
        });
    }

    success(msg: string): void {
        toastr.success(msg);
    }

    info(msg: string): void {
        toastr.info(msg);
    }

    warning(msg: string): void {
        toastr.warning(msg);
    }
}
