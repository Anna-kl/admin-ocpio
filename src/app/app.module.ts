import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { AppComponent } from './app.component';
import {NgbDropdown, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CategoryComponent } from './pages/category/category.component';
import {HttpClientModule} from "@angular/common/http";
import {SidebarComponent} from "./layouts/sidebar/sidebar.component";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { HeaderComponent } from './layouts/header/header.component';
import { AddCategoryComponent } from './components/modals/add-category/add-category.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from "./pages/login/login.component";
import { RegistrationComponent } from './pages/users/registration/registration.component';
import {BusService} from "./services/busEvents";
import { AddRegistrationComponent } from './components/modals/add-registration/add-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    SidebarComponent,
    HeaderComponent,
    AddCategoryComponent,
    LoginComponent,
    RegistrationComponent,
    AddRegistrationComponent
  ],
  imports: [
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [NgbDropdown, BusService],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
