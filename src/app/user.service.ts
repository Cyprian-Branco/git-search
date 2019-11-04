import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'

})
export class UserService {
  userdata: any;
  repodata: any;
  constructor(private http: HttpClient) {
    console.log('service is now ready .');

  }
  getGithubUser(username) {
    console.log(username);
    const promise = new Promise((resolve, reject) => {
      this.http.get(environment.apiUrl + 'users/' + username + '?access_token=' + environment.accessToken).toPromise().then(response => {
        this.userdata = response;
        resolve(this.userdata);
      },
        error => {
          console.log(error);
          reject(error);
        });
    });
    return promise;
  }
  getGithubRepos(username) {
    console.log(username);
    const promise = new Promise((resolve, reject) => {
      this.http.get(environment.apiUrl + 'users/' + username +
        '/repos?access_token=' + environment.accessToken).toPromise().then(response => {
          this.repodata = response
          resolve(this.repodata);
        },
          error => {
            console.log(error);
            reject(error);
          });
    });
    return promise;
  }
}

