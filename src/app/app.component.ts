import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'databinding-challenge';

  onStartGame(startGameCounter: { incrementedOnStart: number }) {
    console.log('No app: ', startGameCounter.incrementedOnStart);
  }
}
