import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss'],
})
export class SampleComponent implements OnInit {
  @Input() greeting = '';
  @Input() count = 0;
  @Output() login = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  clickHandler() {
    console.log('Local handler');
    this.login.emit('Custom event');
  }
}
