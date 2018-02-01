import { AfterViewInit, Component, ElementRef, ViewChild, Input, Output, EventEmitter } from "@angular/core";
import { MDCSelect } from "@material/select";

@Component({
    selector: "dropdown",
    templateUrl: "dropdown.html",
    styleUrls: ["dropdown.css"]
})
export class DropdownComponent implements AfterViewInit {
    @ViewChild("container") containerEl: ElementRef;
    @Input() items: any[] = [];
    @Input() fieldName: string;
    @Output() onChange = new EventEmitter<any>();

    private _select: MDCSelect;

    ngAfterViewInit(): void {
        this._select = new MDCSelect(this.containerEl.nativeElement);
        this._select.selectedIndex = 0;
        this._select.label_.className = "mdc-select__label mdc-select__label--float-above";
        this._select.listen("MDCSelect:change", () => {
            this.onChange.emit(this.items[this._select.selectedIndex]);
        });
    }
}