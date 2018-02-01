import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { MDCTextFieldLabel } from "@material/TextField";

@Component({
    selector: "text-field",
    templateUrl: "textField.html"
})

export class TextFieldComponent implements AfterViewInit {
    @Input() value: string;
    @Input() label: string;

    @Output() onValueChanged = new EventEmitter<string>();

    @ViewChild("container") containerEl: ElementRef;

    private mdcTextInput: MDCTextFieldLabel;

    ngAfterViewInit(): void {
        this.mdcTextInput = new MDCTextFieldLabel(this.containerEl.nativeElement);
    }
}