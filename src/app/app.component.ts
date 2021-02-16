import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  show = false;

  styleObject = {
    color: 'red',
    'font-size': '24px',
    border: '0.5px solid green',
  };

  cities = ['Mumbai', 'Bengaluru', 'Haveri'];

  toggle() {
    this.cities = [...this.cities, 'New City'];
  }
}
