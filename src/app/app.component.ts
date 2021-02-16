import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  inputHandler(args: any) {
    const input = args.target as HTMLInputElement;
    console.log('input', input.value);
  }
}
