import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";
import JSONFormatter from "json-formatter-js";

@Component({
    selector: "json-values",
    templateUrl: "jsoNValues.html"
})
export class JsonValuesComponent {
    private _json = {};

    @ViewChild("container") containerEl: ElementRef;

    @Input()
    get json(): any {
        return this._json;
    }
    set json(value: any) {
        this._json = value;
        const formatter = new JSONFormatter(value, 100, {
            theme: "dark"
        });

        this.containerEl.nativeElement.innerHTML = "";
        this.containerEl.nativeElement.appendChild(formatter.render());
    }
}