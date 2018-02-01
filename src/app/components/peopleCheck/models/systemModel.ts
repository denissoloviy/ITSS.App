import { EventEmitter } from "@angular/core";
import { Employee } from "./userModels";

export class SystemModel {
    public isActive: boolean;
    public title: string;
    public user?: Employee;
}