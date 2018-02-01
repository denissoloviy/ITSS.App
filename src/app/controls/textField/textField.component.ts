import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { MDCService } from "../../_common/services/mdcService";

@Component({
    selector: "text-field",
    templateUrl: "textField.html",
    styleUrls: ["textField.css"]
})

export class TextFieldComponent implements AfterViewInit {
    private _value: string;

    @Input() get value(): string {
        return this._value;
    }
    set value(val: string) {
        this._value = val;
        this.valueChange.emit(val);
    }
    @Input() label: string;

    @Output() valueChange = new EventEmitter<string>();

    @ViewChild("container") containerEl: ElementRef;

    constructor(private _mdcService: MDCService) { }

    ngAfterViewInit(): void {
        this._mdcService.mdc.textField.MDCTextField.attachTo(this.containerEl.nativeElement);
    }
}