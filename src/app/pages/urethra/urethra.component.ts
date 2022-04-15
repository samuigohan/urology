import { Component } from "@angular/core";
import { ApiService } from "src/app/api.service";
import { Router, RouterEvent, NavigationStart, NavigationEnd } from "@angular/router";
import * as $ from 'jquery';

@Component({
    selector: 'urethra',
    templateUrl: './urethra.html',
    styleUrls: ['./urethra.scss'],
})

export class Urethra {

    public html: string = null;
    public faqCategory: string = null;

    constructor(private api: ApiService,
        private router: Router) {

        router.events.subscribe((event: RouterEvent) => {
            if (event instanceof NavigationStart) {
                this.getPage(event.url);
                this.faqCategory = event.url;
            }
        });
    }

    ngOnInit() {
        this.getPage(this.router.url);
        this.faqCategory = this.router.url;
    }

    private getPage(url: string) {
        this.api.getPage(url).subscribe(
            (response: string) => {
                this.html = response;
            }
        )
    }
}