import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
loginForm!: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(10)]]
    });
  }
errorMessageUserName: string= "";
errorMessagePassword: string = "";

  onSubmit() {
  this.errorMessageUserName="";
  this.errorMessagePassword="";
  if(this.loginForm.get('username')?.hasError('required')){
      this.errorMessageUserName = "This field is required";
  }else if(this.loginForm.get('username')?.hasError('minlength')){
        this.errorMessageUserName = "Min Length is 4 chars";
  }else if(this.loginForm.get('username')?.hasError('pattern')){
          this.errorMessageUserName = "Invalid username format";
  }else if(this.loginForm.value.username != "admin" ){
             this.errorMessageUserName = "Wrong username!";}

   if(this.loginForm.get('password')?.hasError('required')){
         this.errorMessagePassword = "This field is required";
     }else if(this.loginForm.get('password')?.hasError('minlength')){
           this.errorMessagePassword = "Min Length is 10 chars";
     }else if(this.loginForm.value.password != "adminadmin" ){
                   this.errorMessagePassword = "Wrong password!";}
//      console.log(this.loginForm);
//      console.log(this.loginForm.value.username);



    else if(this.loginForm.value.username== "admin" && this.loginForm.value.password == "adminadmin")
    this.router.navigate(['/admin']);
    this.clear();
    }
    clear(){
    this.loginForm.value.username ="";
    this.loginForm.value.password = "";
//     this.show = true;
    }
}
