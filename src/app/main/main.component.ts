import { Component } from '@angular/core';
import { GENRES} from './genres.constant';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
genres = GENRES;
capitalizeFirstLetter(str:string):string{
    return str.charAt(0).toUpperCase() + str.substring(1);
}

}
