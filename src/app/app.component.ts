import { Component } from '@angular/core';
import { TraslateFactoryService } from './traslate/traslate-factory.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public translate: TraslateFactoryService) {
  }
}
