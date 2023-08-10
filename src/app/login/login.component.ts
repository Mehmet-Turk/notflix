import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(private router: Router, private route: ActivatedRoute) {}
username : string ="";
password : string ="";
show: boolean= false;
login(){
console.log("user name is " + this.username)
if(this.username == "admin" && this.password == "admin")
this.router.navigate(['/admin']);
this.clear();
}
clear(){
this.username ="";
this.password = "";
this.show = true;
}

}
