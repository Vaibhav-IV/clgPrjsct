// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
// export class LoginComponent implements OnInit {

//   public loginForm!: FormGroup

//   constructor(private formbuilder: FormBuilder,private http: HttpClient, private router: Router) { }

//   ngOnInit(): void {
//     this.loginForm = this.formbuilder.group({
//       email: [''],
//       password: ['', Validators.required]
//     })
//   }

//   login(){
//     this.http.get<any>("http://localhost:3000/signupUsersList")
//     .subscribe(res=>{
//       const user = res.find((a:any)=>{
//         return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password 
//       });
//       if(user){
//         alert('Login Succesful');
//         this.loginForm.reset()
//       this.router.navigate(["home"])
//       }else{
//         alert("user not found")
//       }
//     },err=>{
//       console.log(err);
//       alert("Something went wrong")
//     })
//   }

// }


import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login:FormGroup|any;
  constructor(private _http:HttpClient, private _route:Router) { }

  ngOnInit(): void {
    this.login = new FormGroup({
      'fname': new FormControl(),
      'password': new FormControl()
    })
  }
  logindata(login:FormGroup){
   // console.log(this.login.value);
    this._http.get<any>("http://localhost:3000/signup")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.fname === this.login.value.fname && a.password === this.login.value.password
      });

      if(user){
        alert('you are successfully login');
        this.login.reset();
        //$('.form-box').css('display','none');
        this._route.navigate(['home']);
      }else{
        alert('User Not Found');
        this._route.navigate(['login']);
      }

    }, err=>{
      alert('Something was wrong');
    })
   

  }

  sbtn1(){
    $('.form-box').css('display','none');
    $('.form-box1').css('display','block');
  }

}
