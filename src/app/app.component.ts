import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onStartGame(startGameCounter: { incrementedOnStart: number }) {
    if( startGameCounter.incrementedOnStart % 2 === 0) {
      this.evenNumbers.push(startGameCounter.incrementedOnStart);
    } else {
      this.oddNumbers.push(startGameCounter.incrementedOnStart);
    }
  }
}
