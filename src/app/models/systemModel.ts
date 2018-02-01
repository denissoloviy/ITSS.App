import { CommonUserModel } from "./commonUserModel";
export class SystemModel {
    public isActive: boolean;
    public title: string;
    // public get id(): string {
    //     return this.title.toLowerCase().replace(/\s/g, "");
    // }
    public user?: CommonUserModel;
}