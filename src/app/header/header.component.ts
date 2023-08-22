import { Component } from '@angular/core';
import { FILMS} from '../admin/films.constant';
import {Film} from 'src/app/core/interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
films = FILMS;
searchValue: string = '';
searchResults: any[] = [];
search(): void {
  this.searchResults = this.films.filter((el) =>{

    return el.title.toLowerCase().indexOf(this.searchValue.toLowerCase()) > -1});


}
capitalizeFirstLetter(str:string):string{
    return str.charAt(0).toUpperCase() + str.substring(1);
}
}
