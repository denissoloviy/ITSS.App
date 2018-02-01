import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: "checkbox",
    templateUrl: "checkbox.html",
    styleUrls: ["checkbox.css"]
})

export class CheckboxComponent {
    private _value: boolean;

    @Input() get value(): boolean {
        return this._value;
    }
    set value(val: boolean) {
        this._value = val;
        this.valueChange.emit(val);
    }

    @Input() label: string;

    @Output() valueChange = new EventEmitter<boolean>();
}