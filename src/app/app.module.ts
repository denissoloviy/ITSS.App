import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { EnvService } from "./_common/services/envService";
import { MDCService } from "./_common/services/mdcService";
import { ServiceCaller } from "./_common/services/serviceCaller";
import { ToastrService } from "./_common/services/toastrService";
import { AppComponent } from "./app.component";
import { PeopleCheckComponent } from "./components/peopleCheck/peopleCheck.component";
import { ProjectDetailsComponent } from "./components/projectDetails/projectDetails.component";
import { CheckboxComponent } from "./controls/checkbox/checkbox.component";
import { DropdownComponent } from "./controls/dropdown/dropdown.component";
import { SwitcherComponent } from "./controls/switcher/switcher.component";
import { TextFieldComponent } from "./controls/textField/textField.component";

@NgModule({
  declarations: [
    AppComponent,
    ProjectDetailsComponent,
    PeopleCheckComponent,
    SwitcherComponent,
    DropdownComponent,
    CheckboxComponent,
    TextFieldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  entryComponents: [
    ProjectDetailsComponent,
    PeopleCheckComponent,
    SwitcherComponent,
    DropdownComponent,
    CheckboxComponent,
    TextFieldComponent
  ],
  providers: [
    MDCService,
    ServiceCaller,
    ToastrService,
    EnvService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
