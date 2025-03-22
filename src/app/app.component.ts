import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloWorldApp';
  bridgeLabzLogo: string = 'assets/logo.jpg';
  userName: string = '';
  errorMessage = "";
  validateUserName() {
    const namePattern = /^[A-Z][a-zA-Z]{2,}$/;
    
    if (!this.userName.match(namePattern)) {
      this.errorMessage = "Invalid Name! Start with a capital letter & use at least 3 letters.";
    } else {
      this.errorMessage = "";
    }
  }

  
  
}
