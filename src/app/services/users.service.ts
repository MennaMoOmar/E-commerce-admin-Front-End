import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { from } from 'rxjs';
import { Input } from '@angular/core';
import { BehaviorSubject,throwError } from 'rxjs';
import { shareReplay, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  // localStorage.setItsetem('token', eltoken);

  constructor(private myClient: HttpClient) {
    console.log(myClient);
    console.log("ctor")
  }

  tokenpw

    /*local storage*/
    token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDMxYTM0NzI4MmQ4MDAwMTVmODczZjgiLCJpYXQiOjE2MTQwODk2NTF9.cf0pvwK0CVzNlaNpBiX-Nx0A1mhxGPgxSU3yTouiXww'
    localStorageToken = (token)=>{
      localStorage.setItem('token', token)
      return localStorage.getItem('token');
    }
 

  private baseURL: string = "https://amnesia-skincare.herokuapp.com/api"
  // private baseURL:string = "http://localhost:3000/users";

  // get all users
  // getUsers(){
  //   return this.myClient.get(this.baseURL)
  // }


  //get profile
  getProfile() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.token
      })
    };
    return this.myClient.get(`${this.baseURL}/users/profile`, httpOptions);
  }

  //post edit profile
  editUser(userinfoEditedJson) {
    console.log(userinfoEditedJson)
    console.log(typeof userinfoEditedJson)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.token
      })
    };
    return this.myClient.post(`${this.baseURL}/users/`, userinfoEditedJson, httpOptions);
  }

    //patch resetpw
    crnPassword(userpwJson,tokencrpw) {
      console.log(userpwJson)
      console.log(this.token)
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: tokencrpw
        })
      };
      return this.myClient.post(`${this.baseURL}/users/reset/password`, userpwJson, httpOptions);
    }

  //delete user id
  deleteUser() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.token
      })
    };
    return this.myClient.delete(`${this.baseURL}/users/`, httpOptions);
  }

}