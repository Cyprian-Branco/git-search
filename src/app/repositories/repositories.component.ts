import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { HomeComponent} from '../home/home.component'
@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  user: any
  repos: any
  username: any

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  searchUser(user){
    this.getUserDetails(user)

  }

  getUserDetails(repo){
    this.userService.getGithubUser(repo).then((response)=> {
      this.user = response
    })
    this.userService.getGithubRepos(repo).then((response=>{
      this.repos = response
    }))

  }

}
