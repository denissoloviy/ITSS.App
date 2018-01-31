import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ElementRef,
  Type,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";

import { MDCService } from "./_common/services/mdcService";
import { PeopleCheckComponent } from "./components/peopleCheck/peopleCheck.component";
import { ProjectDetailsComponent } from "./components/projectDetails/projectDetails.component";
import { NavModel } from "./models/navModel";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements AfterViewInit {
  @ViewChild("navContainer") navEl: ElementRef;
  @ViewChild("content", { read: ViewContainerRef }) contentEl;

  constructor(private _mdcService: MDCService,
    private _componentFactoryResolver: ComponentFactoryResolver) { }

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

  ngAfterViewInit(): void {
    this._mdcService.mdc.tabs.MDCTabBar.attachTo(this.navEl.nativeElement);
  }

  openTab(n: NavModel): void {
    if (n.isActive) {
      return;
    }

    this.navs.forEach(x => x.isActive = false);
    n.isActive = true;
    this.setComponent(n.type);
  }

  setComponent(type: Type<{}>) {
    this.contentEl.clear();
    const factory = this._componentFactoryResolver.resolveComponentFactory(type);
    const ref = this.contentEl.createComponent(factory);
    ref.changeDetectorRef.detectChanges();
  }

  hasActive(): boolean {
    return this.navs.filter(x => x.isActive).length > 0;
  }
}
