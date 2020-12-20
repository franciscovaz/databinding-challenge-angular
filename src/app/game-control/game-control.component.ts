import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  incrementedOnStart: number = 0;
  incrementInterval;

  constructor() { }

  ngOnInit(): void {
  }

  startGame() {
    console.log('Vamos começar!');
    this.incrementInterval = setInterval(() => {
      this.incrementedOnStart++;
    }, 1000);
  }

  stopGame() {
    clearInterval(this.incrementInterval);
  }

}
