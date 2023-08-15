import { Component } from '@angular/core';
import { FILMS} from './films.constant'
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
films = FILMS;


}

