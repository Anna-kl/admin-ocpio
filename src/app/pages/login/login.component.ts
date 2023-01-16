import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {state} from "@angular/animations";
import {BusService} from "../../services/busEvents";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit{
  authForm: FormGroup = this._builder.group({
    name: new FormControl(undefined, Validators.required),
    password: new FormControl(undefined, Validators.required)
  });
  errorText: string = '';
  constructor(private _builder: FormBuilder,
              private _auth: AuthService,
              public  _router: Router,
              private _busEvent: BusService) {
  }
  authSubmit() {
    const data = this.authForm.getRawValue();
    this._auth.authUser(data).subscribe(
      result => {
          if (result.code === 200){
              this._busEvent.transferToken(result.data);
              this._router.navigate(['/category', {token: result.data}]);
          } else {
            this.errorText = 'Пользователь не найден';
          }
      }
    );
  }

  validate() {
    if (this.authForm.get('name')?.valid && this.authForm.get('password')?.valid){
      return false;
    } else {
      return true;
    }
  }

  ngOnInit(): void {
  }

  test() {
    console.log('test');
  }
}
