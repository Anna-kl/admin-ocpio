import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategoryComponent} from "./pages/category/category.component";
import {LoginComponent} from "./pages/login/login.component";
import {RegistrationComponent} from "./pages/users/registration/registration.component";


const routes: Routes = [
  { path: '', component: LoginComponent },
  // { path: 'dashboard', component: DashboardComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'registrations', component: RegistrationComponent },
  // { path: 'alerts', component: AlertsComponent },
  // { path: 'accordion', component: AccordionComponent },
  // { path: 'badges', component: BadgesComponent },
  // { path: 'breadcrumbs', component: BreadcrumbsComponent },
  // { path: 'buttons', component: ButtonsComponent },
  // { path: 'cards', component: CardsComponent },
  // { path: 'carousel', component: CarouselComponent },
  // { path: 'charts-apexcharts', component: ChartsApexchartsComponent },
  // { path: 'charts-chartjs', component: ChartsChartjsComponent },
  // { path: 'form-editors', component: FormsEditorsComponent },
  // { path: 'form-elements', component: FormsElementsComponent },
  // { path: 'form-layouts', component: FormsLayoutsComponent },
  // { path: 'icons-bootstrap', component: IconsBootstrapComponent },
  // { path: 'icons-boxicons', component: IconsBoxiconsComponent },
  // { path: 'icons-remix', component: IconsRemixComponent },
  // { path: 'list-group', component: ListGroupComponent },
  // { path: 'modal', component: ModalComponent },
  // { path: 'pagination', component: PaginationComponent },
  // { path: 'progress', component: ProgressComponent },
  // { path: 'spinners', component: SpinnersComponent },
  // { path: 'tables-data', component: TablesDataComponent },
  // { path: 'tables-general', component: TablesGeneralComponent },
  // { path: 'tabs', component: TabsComponent },
  // { path: 'tooltips', component: TooltipsComponent },
  // { path: 'pages-blank', component: PagesBlankComponent },
  // { path: 'pages-contact', component: PagesContactComponent },
  // { path: 'pages-error404', component: PagesError404Component },
  // { path: 'pages-faq', component: PagesFaqComponent },
  // { path: 'pages-login', component: PagesLoginComponent },
  // { path: 'pages-register', component: PagesRegisterComponent },
  // { path: 'user-profile', component: UsersProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
