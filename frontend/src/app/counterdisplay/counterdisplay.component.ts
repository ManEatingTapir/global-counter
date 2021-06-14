import { Component, OnInit } from '@angular/core';
import { io } from 'socket.io-client';
@Component({
  selector: 'app-counterdisplay',
  templateUrl: './counterdisplay.component.html',
  styleUrls: ['./counterdisplay.component.css']
})
export class CounterDisplayComponent implements OnInit {
  counter: any;
  constructor() { 
    let socket = io('http://localhost:5000');
    socket.on('connect', () => {
      socket.emit('counter update', false);
    });

    socket.on('update', data => {
      this.counter = data;
    });

  }

  ngOnInit(): void {
  }

}
