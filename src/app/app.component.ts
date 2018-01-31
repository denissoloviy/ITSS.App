import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";

import { MDCService } from "./_common/services/mdcService";
import { NavModel } from "./models/navModel";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements AfterViewInit {
  @ViewChild("navContainer") navEl: ElementRef;

  constructor(private _mdcService: MDCService) { }

  public navs: NavModel[] = [{
    isActive: true,
    title: "Project Details"
  }, {
    isActive: false,
    title: "People Check"
  }, {
    isActive: false,
    title: "Maconomy Project Url Save"
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
  }
}
