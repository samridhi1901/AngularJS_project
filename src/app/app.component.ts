import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloWorldApp';
  bridgeLabzLogo: string = 'assets/logo.jpg';
  bridgeLabzUrl: string = 'https://www.bridgelabz.com';

  openBridgeLabz() {
    window.open(this.bridgeLabzUrl, '_blank');
  }
}
