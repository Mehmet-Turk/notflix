import { Injectable } from '@angular/core';
import { FILMS} from 'src/app/admin/films.constant';
import { Observable, of, Subject } from 'rxjs';
import {Film} from 'src/app/core/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  films = FILMS;


  constructor() { }

getMovies(){
return this.films;}



addMovie( film : Film){
// const film : Film = {title: "THE POLICEMAN",
//               genre: "action",
//               summary: "The detective faces a race against time to catch the thief and stop the randomly evolving computer virus, which models its behaviour.",
//               url: "https://www.youtube.com/embed/TZkRY0AoiqI"};
     this.films.push(film);
     console.log(this.films);
}
}

