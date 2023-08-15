import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {
genre : string = "";
  constructor(private router:Router){
}
ngOnInit():void{
this.genre = this.router.url;
this.genre = this.genre.replace("/", "");
console.log(this.genre);
}

}
