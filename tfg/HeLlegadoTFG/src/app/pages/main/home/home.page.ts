import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(@Inject(Router) private router: Router) { }

  goToSignUp() {
    this.router.navigate(['/auth','sign-up']);
  }

  goToLogin() {
    this.router.navigate(['/auth', 'log-in']);
  }
}
