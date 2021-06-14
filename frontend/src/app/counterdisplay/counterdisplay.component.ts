import { Component, OnInit } from '@angular/core';
import { io } from 'socket.io-client';
@Component({
  selector: 'app-counterdisplay',
  templateUrl: './counterdisplay.component.html',
  styleUrls: ['./counterdisplay.component.css']
})
export class CounterDisplayComponent implements OnInit {
  counter = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
