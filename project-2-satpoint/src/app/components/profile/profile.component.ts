import { Component, OnInit} from '@angular/core';
import { Update } from 'src/app/models/profile';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';
import { ProfileService } from 'src/app/services/profile.service';
import { profileAnimation } from 'src/app/_animations/profileAnimation';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  animations: [profileAnimation]
})
export class ProfileComponent implements OnInit {
  aboutMe : String | undefined;
  firstName : String | undefined;
  lastName : String | undefined;
  email: String | undefined;
  user : User | undefined;
  username: String | undefined;
  showFav = false;
  showCom = false;
  satid = ""

  constructor(private loginService:LoginService, private profileService:ProfileService) { }


  ngOnInit(): void {
    this.user = this.loginService.getCurrentUser();
    console.log(this.user);
    this.aboutMe = this.user?.aboutMe;
    this.firstName = this.user?.firstName;
    this.lastName = this.user?.lastName;
    this.email = this.user?.email;
    this.username = this.user?.username;
  }

  showFavorites(){
    console.log(this.showFav)
      this.showFav = !this.showFav;
  }
  showComments(){
    this.showCom = !this.showCom;
    console.log(this.showCom)
  }

  updateUser(): void{
    let user:Update = new Update(this.firstName, this.lastName, this.email, this.aboutMe);
    console.log(user);
    this.profileService.update(user).subscribe(
      (response:Update)=>{
      }
    )
  } 

}
