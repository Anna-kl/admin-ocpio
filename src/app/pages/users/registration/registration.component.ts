import {Component, OnInit} from '@angular/core';
import {IRegistration} from "../../../DTO/Users/IRegistration";
import {UserService} from "../../../services/user.service";
import {ActivatedRoute, NavigationStart, Router} from "@angular/router";
import {filter} from "rxjs";
import {AddCategoryComponent} from "../../../components/modals/add-category/add-category.component";
import {MenuCategories} from "../../../DTO/enums/menuCategories";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AddRegistrationComponent} from "../../../components/modals/add-registration/add-registration.component";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [UserService]
})
export class RegistrationComponent implements OnInit{
  registrations: IRegistration[] = [];
  token: string = '';

  constructor(private _user: UserService,
              public  _router: Router,
              private modalService: NgbModal) {
    // Get NavigationStart events

      if (this._router.getCurrentNavigation()!.extras.state) {
        this.token = this._router.getCurrentNavigation()!.extras.state!['token'];
        this._user.getRegister(this.token).subscribe(
          result => this.registrations = result as IRegistration[]
        );
      }
  }

  updateRegistration(reg: IRegistration) {
    const modalRef = this.modalService.open(AddRegistrationComponent);
    modalRef.componentInstance.registrations = this.registrations;
    modalRef.componentInstance.chooseMenuItem = MenuCategories.SubCategory;
    modalRef.componentInstance.register = reg;
    modalRef.componentInstance.token = this.token;
  }

  ngOnInit(): void {

  }

  deleteRegistration(reg: IRegistration) {

  }

  addRegistration() {
    const modalRef = this.modalService.open(AddRegistrationComponent);
    modalRef.componentInstance.registrations = this.registrations;
    modalRef.componentInstance.chooseMenuItem = MenuCategories.SubCategory;
    modalRef.componentInstance.token = this.token;
  }
}
