import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() startGameEvent = new EventEmitter<{
    incrementedOnStart: number;
  }>();
  incrementedOnStart: number = 0;
  incrementInterval;

  constructor() { }

  ngOnInit(): void {
  }

  startGame() {
    console.log('Vamos começar!');

    this.incrementInterval = setInterval(() => {
      this.incrementedOnStart++;
      this.startGameEvent.emit({
        incrementedOnStart: this.incrementInterval
      });
    }, 1000);
  }

  stopGame() {
    clearInterval(this.incrementInterval);
  }

}
