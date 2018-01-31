import { Injectable } from "@angular/core";

@Injectable()
export class MDCService {
    get mdc() {
        return window["mdc"];
    }
}