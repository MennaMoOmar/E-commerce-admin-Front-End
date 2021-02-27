import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private myClient: HttpClient) { }

  token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDMxYTM0NzI4MmQ4MDAwMTVmODczZjgiLCJpYXQiOjE2MTQ0NDE1NzV9.y3PBLeU1Y-SlAxmqVKjTiT8BMnbVPEIgFy8hs7VHiRA'

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
