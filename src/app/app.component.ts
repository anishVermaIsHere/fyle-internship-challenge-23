import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title="Fyle Frontend Challenge"
  dateTime=new Date().toDateString();
  year=new Date().getFullYear();
  constructor() {}
}
