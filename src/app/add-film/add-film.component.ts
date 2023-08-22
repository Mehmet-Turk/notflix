import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MovieService} from 'src/app/movie.service';
import {Film} from 'src/app/core/interfaces';


@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css']
})

export class AddFilmComponent {
constructor (private movieService : MovieService, private router: Router){}
  title = '';
  genre = '';
  summary = '';
  url = '';
onSubmit() {
const film : Film = {title: this.title,
              genre: this.minimizeFirstLetter(this.genre),
              summary: this.summary,
              url: this.convertToEmbedUrl(this.url)};

this.movieService.addMovie(film);
    this.title = '';
    this.summary = '';
    this.url = '';
    this.genre = '';
    this.router.navigate(['/admin']);
}
minimizeFirstLetter(str:string):string{
    return str.charAt(0).toLowerCase() + str.substring(1);
    }
    convertToEmbedUrl(youtubeUrl:string) {
      // Split the URL to get the video ID
      const urlParts = youtubeUrl.split("=");
      const videoId = urlParts[urlParts.length - 1];

      // Construct the embed URL
      const embedUrl = `https://www.youtube.com/embed/${videoId}`;

      return embedUrl;
    }
}

