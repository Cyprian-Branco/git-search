import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userProfile: any
  userRepos: any
  username = 'Cyprian-Branco'

  constructor(private userservice: UserService) {
    this.getMyProfile()
    this.getMyRepos()
   }

  ngOnInit() {
  }
  getMyProfile(){
    this.userservice.getGithubUser(this.username).then((response)=>{
      console.log(response)
      this.userProfile = response
    })
  }
  getMyRepos(){
    this.userservice.getGithubRepos(this.username).then((response)=>{
      console.log(response)
      this.userRepos = response
    })
  }

}
