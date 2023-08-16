import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FILMS} from '../admin/films.constant';
import {Film} from 'src/app/core/interfaces';
// import {DomSanitizationService} from '@angular/platform-browser';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
genre : string = "";
films = FILMS;
categorizedFilms : Film[] = [];
  constructor(private router:Router){
}
ngOnInit():void{
this.genre = this.router.url.replace("/", "");
console.log(this.genre);
this.categorizeFilms();
}
categorizeFilms(): void {
  this.categorizedFilms = this.films.filter((el) =>{
    return el.genre === this.genre });
    console.log(this.categorizedFilms);
}
// cleanURL(str:string) {
//     return this.sanitizer.bypassSecurityTrustResourceUrl(str);
//   }

}
