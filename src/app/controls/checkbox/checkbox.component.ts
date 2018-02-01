import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "checkbox",
    templateUrl: "checkbox.html"
})

export class CheckboxComponent {
    @Input() value: boolean;
    @Input() label: string;

    @Output() onValueChanged = new EventEmitter<boolean>();
}