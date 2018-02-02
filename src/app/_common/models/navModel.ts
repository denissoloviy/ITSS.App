import { Type } from "@angular/core";

export class NavModel {
    public isActive: boolean;
    public title: string;
    public type?: Type<{}>;
}
