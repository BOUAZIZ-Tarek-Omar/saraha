import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from "../../api/services/api.service";
import {AuthentificationRequest} from "../../api/models/authentification-request";
import {StorageService} from "../../api/services/utils/storage.service";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  // template:'',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  authentication: AuthentificationRequest = {};
  errorMessage = '';

  constructor(
    private api: ApiService,
    private storageService: StorageService,
    //injection de dep
    //service ou utils
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  async redirectToRegister(): Promise<void> {
    await this.router.navigate(['register']);// no need '/'
  }

  async connect(): Promise<void> {
//todo implement login
    this.api.login(
      this.authentication)
      /* email: "bouaziztarak@yahoo.fr",
       password: "mdp123456789"*/

      .subscribe((data) => {
        this.storageService.storeToken((data.token as string));
        this.fetchConnectedUserData();

      }, (err) => {
        if (err.status === 404 || err.status==403) {

          this.errorMessage = 'login and / or password incorrect';
        } else {
          this.errorMessage = 'an error has occurred while logging in';
        }
        console.log(err);
      });
  }

  private fetchConnectedUserData(): void {
    this.api.findByEmail(this.authentication.email as string)
      .subscribe(async (userDto) => {

        this.storageService.storeUser(userDto);
        this.storageService.storeUsername(userDto.username as string)
        await this.router.navigate(['', this.storageService.getUsername()]);
      });
  }
}
