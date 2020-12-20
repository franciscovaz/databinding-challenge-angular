import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbersArray: Array<number> = [];

  onStartGame(startGameCounter: { incrementedOnStart: number }) {
    console.log('No app: ', startGameCounter.incrementedOnStart);
    this.numbersArray.push(startGameCounter.incrementedOnStart);
  }
}
