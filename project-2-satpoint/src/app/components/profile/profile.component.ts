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
  
  username: string | undefined;
  showFav = false;
  showCom = false;
  satid = ""
  page = ""

  constructor(private loginService:LoginService, private profileService:ProfileService) { }


  ngOnInit(): void {
    if(!this.loginService.currentUser){
    this.loginService.getUser(sessionStorage.getItem("username")).subscribe(user => {
        this.loginService.currentUser = user;  
        this.aboutMe = user.aboutMe;
        this.email = user.email;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.username = user.username || "";
        console.log(this.loginService.currentUser)
  })
}
  }

  showFavorites(){
    console.log(this.showFav)
      this.showFav = !this.showFav;
      this.page = "userFavorites"
  }
  showComments(){
    console.log('page in profile')
    console.log(this.page)
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
