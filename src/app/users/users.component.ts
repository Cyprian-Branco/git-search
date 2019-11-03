import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: any
  repos: any
  username: ''

  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  searchUser(user){
    console.log(user)
    this.getUserDetails(user)
  }

  getUserDetails(user){
    this.userService.getGithubUser(user).then((response)=>{
      this.user = response
    })
    this.userService.getGithubRepos(user).then((response)=>{
      console.log(response)
      this.repos = response
    })
  }

}
