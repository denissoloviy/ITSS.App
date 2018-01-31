import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { MDCService } from "./_common/services/mdcService";
import { ServiceCaller } from "./_common/services/serviceCaller";
import { ToastrService } from "./_common/services/toastrService";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    MDCService,
    ServiceCaller,
    ToastrService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
