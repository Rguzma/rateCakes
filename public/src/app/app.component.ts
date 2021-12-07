import { Component } from '@angular/core';
import {CakesService} from './cakes.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';


  constructor(private_httpService: CakesService){
  }
}
