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
        $('.faq-content').scrollTop(0);
        if (event.url != "/") {
          this.subpage = true;
        }
        else {
          this.subpage = false;
        }
      }
    });

    let self = this;
    window.onscroll = function () { self.windowScrolled() };
  }

  
  public windowScrolled() {
    var btn = $('#btnScrollToTop');
    if ($(window).scrollTop() > 400) {
      $('#btnScrollToTop').addClass('displayed');
    } else {
      $('#btnScrollToTop').removeClass('displayed');
    }
  }

  public scrollToTop() {
    $('html, body').stop().animate({ scrollTop: 0 }, 250, 'swing', function () {});
  }
}
