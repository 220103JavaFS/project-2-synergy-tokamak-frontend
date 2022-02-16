import { Component, OnInit} from '@angular/core';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  aboutMe : String | undefined;
  firstName : String | undefined;
  lastName : String | undefined;
  email: String | undefined;
  user : User | undefined;
  username: String | undefined;

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    this.user = this.loginService.getCurrentUser();
    console.log(this.user);
    this.aboutMe = this.user?.aboutMe;
    this.firstName = this.user?.firstName;
    this.lastName = this.user?.lastName;
    this.email = this.user?.email;
    this.username = this.user?.username;
  }

}
