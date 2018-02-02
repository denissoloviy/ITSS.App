import {
    Component,
    ComponentFactoryResolver,
    ComponentRef,
    Input,
    OnInit,
    Type,
    ViewChild,
    ViewContainerRef,
} from "@angular/core";
import { OnDestroy } from "@angular/core/src/metadata/lifecycle_hooks";

@Component({
    selector: "dynamic-content",
    template: "<div #container></div>"
})
export class DynamicContentComponent implements OnInit, OnDestroy {
    @Input() type: Type<{}>;

    @ViewChild("container", { read: ViewContainerRef })
    container: ViewContainerRef;

    private componentRef: ComponentRef<{}>;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver) {
    }

    ngOnInit() {
        if (this.type) {
            let factory = this.componentFactoryResolver.resolveComponentFactory(this.type);
            this.componentRef = this.container.createComponent(factory);
        }
    }

    ngOnDestroy() {
        if (this.componentRef) {
            this.componentRef.destroy();
            this.componentRef = null;
        }
    }
}