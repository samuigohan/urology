import { Component } from '@angular/core';
import { Router, RouterEvent, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public subpage: boolean = false;
  title = 'urology';

  constructor(router: Router) {
    router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationStart) {
        if (event.url != "/") {
          this.subpage = true;
        }
        else {
          this.subpage = false;
        }
      }
    });
  }

}
