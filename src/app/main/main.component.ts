import { Component } from '@angular/core';
import { GENRES} from './genres.constant';
import { FILMS} from '../admin/films.constant';
import {Film} from 'src/app/core/interfaces';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
genres = GENRES;
films = FILMS;
searchValue: string = '';
searchResults: any[] = [];
capitalizeFirstLetter(str:string):string{
    return str.charAt(0).toUpperCase() + str.substring(1);
}
search(): void {
  this.searchResults = this.films.filter((el) =>{

    return el.title.toLowerCase().indexOf(this.searchValue.toLowerCase()) > -1});


}

}
