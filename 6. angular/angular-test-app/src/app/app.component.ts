import { Component, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'MyApp';

  asd = new EventEmitter<number>();

  constructor(private router: Router) {}

  navigate(navigateTo: string) {
    this.router.navigateByUrl(navigateTo);
  }
}
