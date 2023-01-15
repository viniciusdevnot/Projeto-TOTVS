import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { RequestLogin } from '../resources/models/RequestLogin';
import { AlertService } from '../resources/services/alert.service';
import { LoginService } from '../resources/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public requestLogin!: RequestLogin;


  constructor(private router: Router, private loginService: LoginService, private alertService: AlertService) {

  }

  ngOnInit(): void {
    this.requestLogin = new RequestLogin();
  }


  rotaHome() {
    this.router.navigate(['/home']);
  }


  public doLogin(): void {


    this.loginService.doLogin(this.requestLogin).subscribe(data => {
      this.router.navigate(['home']);
      //primeira callback é de sucess
    },
      (httpError) => {
        this.alertService.error(httpError.error.message);
        //segunda callback é de error
      });
  }

}
