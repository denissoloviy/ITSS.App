import { Injectable } from "@angular/core";
import { EnvModel } from "../models/envModel";

@Injectable()
export class EnvService {
    public currEnv: EnvModel;
}