import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private myClient: HttpClient) { }

  token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDMxYTM0NzI4MmQ4MDAwMTVmODczZjgiLCJpYXQiOjE2MTQwODk2NTF9.cf0pvwK0CVzNlaNpBiX-Nx0A1mhxGPgxSU3yTouiXww'

  private baseURL: string = "https://amnesia-skincare.herokuapp.com/api"

  //get profile image
  getProfileImage(imgname) {
    console.log(imgname)
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     Authorization: this.token
    //   })
    // }
    return this.myClient.get(`${this.baseURL}/images/show/${imgname}`, {responseType:'blob'});
  }

  //patch edit profile image
  editUserImg(userImgEdited) {
    console.log(userImgEdited)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        image: userImgEdited
      })
    };
    return this.myClient.post(`${this.baseURL}/images/user/`, userImgEdited, httpOptions);
  }
}
