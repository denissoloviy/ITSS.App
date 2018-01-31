import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { MDCService } from "./_common/services/mdcService";
import { ServiceCaller } from "./_common/services/serviceCaller";
import { ToastrService } from "./_common/services/toastrService";
import { AppComponent } from "./app.component";
import { PeopleCheckComponent } from "./components/peopleCheck/peopleCheck.component";
import { ProjectDetailsComponent } from "./components/projectDetails/projectDetails.component";

@NgModule({
  declarations: [
    AppComponent,
    ProjectDetailsComponent,
    PeopleCheckComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    ProjectDetailsComponent,
    PeopleCheckComponent
  ],
  providers: [
    MDCService,
    ServiceCaller,
    ToastrService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
