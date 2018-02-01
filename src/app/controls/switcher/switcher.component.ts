import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "switcher",
    templateUrl: "switcher.html",
    styleUrls: ["./switcher.css"]
})
export class SwitcherComponent {
    @Input() id: string;
    @Input() isChecked: boolean;
    @Output() onChange = new EventEmitter<any>();
}