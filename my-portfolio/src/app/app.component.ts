import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-portfolio';
  menuOpen = true;

  onToggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}

