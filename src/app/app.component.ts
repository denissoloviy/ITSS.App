import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ElementRef,
  Type,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";

import { EnvModel } from "./_common/models/envModel";
import { NavModel } from "./_common/models/navModel";
import { EnvService } from "./_common/services/envService";
import { MDCService } from "./_common/services/mdcService";
import { PeopleCheckComponent } from "./components/peopleCheck/peopleCheck.component";
import { ProjectDetailsComponent } from "./components/projectDetails/projectDetails.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements AfterViewInit {
  @ViewChild("navContainer") navEl: ElementRef;

  constructor(private _mdcService: MDCService,
    private _componentFactoryResolver: ComponentFactoryResolver,
    private _envService: EnvService) { }

  public navs: NavModel[] = [{
    isActive: false,
    title: "Project Details",
    type: ProjectDetailsComponent
  }, {
    isActive: false,
    title: "People Check",
    type: PeopleCheckComponent
  }, {
    isActive: false,
    title: "Maconomy Project Url Save",
    type: ProjectDetailsComponent
  }];

  public envs: EnvModel[] = [{
    name: "Test",
    serviceUrl: "https://test-is.itera.no/api/",
    askOnChange: false
  }, {
    name: "Prod",
    serviceUrl: "https://is.itera.no/api/",
    askOnChange: true
  }];

  ngAfterViewInit(): void {
    this._envService.currEnv = this.envs[0];
    this._mdcService.mdc.tabs.MDCTabBar.attachTo(this.navEl.nativeElement);
  }

  envChanged(env: EnvModel): void {
    this._envService.currEnv = env;
  }

  openTab(n: NavModel): void {
    if (n.isActive) {
      return;
    }

    this.navs.forEach(x => x.isActive = false);
    n.isActive = true;
  }

  hasActive(): boolean {
    return this.navs.filter(x => x.isActive).length > 0;
  }
}
