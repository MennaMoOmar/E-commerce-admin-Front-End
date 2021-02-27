import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service'
import { ImageService } from '../../services/image.service'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, throwError } from 'rxjs';
import { shareReplay, catchError } from 'rxjs/operators';


@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit, OnDestroy {

  profImage: String;

  /*ctor*/
  constructor(private myService: UsersService, private myServiceImg: ImageService, private myActivatedRoute: ActivatedRoute) { }

  self = this
  htmlToAdd

  /*var*/
  user
  subscriber
  gender = ["male", "female"]
  genderAns
  passwordErr: String = "hide"
  userimg
  subscriberimg
  isFetch = false
  error = null
  isFetching=true
  isError=true

  /*change select*/
  onChange = (value: any) => {
    console.log(value);
    this.genderAns = value
  }


  /*validation on editing*/
  myForm = new FormGroup({
    firstname: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z]*"), Validators.maxLength(8)]),
    lastname: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z]*"), Validators.maxLength(8)]),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z]{1}[a-zA-Z0-9.\-_]*@[a-zA-Z]{1}[a-zA-Z.-]*[a-zA-Z]{1}[.][a-zA-Z]{3,}$")]),
    phone: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
    password: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z]*")]),
    city: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z]*")]),
    street: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required])
  })


  /*save changes*/
  saveChanges(this) {
    console.log(this.myForm.controls)
    if (this.myForm.valid) {
      console.log("valid")
      // this.isError = true
      // console.log(this.myForm.value)
      const userinfoEdited = {
        "email": this.myForm.value.email,
        "firstname": this.myForm.value.firstname,
        "lastname": this.myForm.value.lastname,
        "addresses": [`${this.myForm.value.country}`, `${this.myForm.value.city}`, `${this.myForm.value.street}`].join(', '),
        "phones": this.myForm.value.phone,
        "userPassword": this.myForm.value.password,
        "gender": this.genderAns,
      }
      // console.log(this.profileImage)
      console.log(userinfoEdited)
      const userinfoEditedJson = JSON.stringify(userinfoEdited)
      this.subscriber = this.myService.editUser(userinfoEditedJson)
        .subscribe((userinfoEditedJson) => {
          // this.isError = true
          console.log(userinfoEditedJson);
          this.passwordErr = "hide"
        },
          (error) => {
            console.log(error);
            this.error = "ddddddd"
          }
        )
    }
    else {
      console.log("invalid")
    }
  }

  /* changeImg */
  changeImg(e) {
    console.log(e.target.value)
    this.userimg = e.target.value
    this.editProfileImage()
  }

  /*get user profile*/
  showProfile() {
    this.isFetching = true
    this.subscriber = this.myService.getProfile()
      .subscribe((userr) => {
      this.isFetching = false
        console.log(userr);
        this.user = userr;
        this.myForm.patchValue({
          firstname: this.user.user.firstname,
          lastname: this.user.user.lastname,
          email: this.user.user.email,
          phone: this.user.user.phones || "",
          gender: this.user.user.gender,
          password: this.user.password,
          country: this.user.user.addresses.split(', ')[0] || "",
          city: this.user.user.addresses.split(', ')[1] || "",
          street: this.user.user.addresses.split(', ')[2] || "",
          // img : this.user.user.profileImage || ""
        })
        this.profImage = `https://amnesia-skincare.herokuapp.com/api/images/show/${this.user.user.profileImage}` || "http://nwsid.net/wp-content/uploads/2015/05/dummy-profile-pic.png"
      },
        (error) => {
          console.log(error);
        }
      )
  }


  /*get user image*/
  // showProfileImage() {
  //   console.log(this.user.user.profileImage)
  //   this.subscriberimg = this.myServiceImg.getProfileImage(this.user.user.profileImage)
  //     .subscribe((userr) => {
  //       console.log(userr);
  //       this.userimg = this.user.user.profileImage
  //     },
  //       (error) => {
  //         console.log(error);
  //       }
  //     )
  // }


  /*post user image*/
  editProfileImage() {
    console.log(this.userimg)
    const userImgEdited = this.userimg
    this.subscriberimg = this.myServiceImg.editUserImg(userImgEdited)
      .subscribe((userImgEdited) => {
        console.log(userImgEdited);
      },
        (error) => {
          console.log(error);
        }
      )
  }

  /*delete*/
  deleteAccount() {
    var confirmationDel = confirm("Are you sure you want to delete your account?")
    if (confirmationDel) {
      this.subscriber = this.myService.deleteUser()
        .subscribe(() => {
          console.log("deleted succ");
        },
          (error) => {
            console.log(error);
          }
        )
    }
  }


  /*oninit*/
  ngOnInit(): void {
    this.showProfile()
  }

  /*destroy*/
  ngOnDestroy(): void {
    // this.subscriber.unsubscribe();
  }

}
