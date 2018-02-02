import { EventEmitter } from "@angular/core";
import { FullEmployee } from "./userModels";

export class SystemModel {
    public isActive: boolean;
    public title: string;
    public user?: FullEmployee;
}