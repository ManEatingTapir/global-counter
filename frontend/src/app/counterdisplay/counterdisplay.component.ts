import { Component, OnInit } from '@angular/core';
import { io } from 'socket.io-client';
@Component({
  selector: 'app-counterdisplay',
  templateUrl: './counterdisplay.component.html',
  styleUrls: ['./counterdisplay.component.css']
})
export class CounterDisplayComponent implements OnInit {
  counter: any;
  socket = io('http://localhost:5000');
  constructor() { 
    this.socket.on('connect', () => {
      this.socket.emit('counter update', false);
    });

    this.socket.on('update', data => {
      this.counter = data;
    });

  }

  ngOnInit(): void {
  }

}
