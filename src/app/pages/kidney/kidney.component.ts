import { Component } from "@angular/core";
import { ApiService } from "src/app/api.service";
import { Router, RouterEvent, NavigationStart, NavigationEnd, ActivatedRoute } from "@angular/router";
import * as $ from 'jquery';
import { SEOService } from "src/app/seo.service";

@Component({
    selector: 'kidney',
    templateUrl: './kidney.html',
    styleUrls: ['./kidney.scss'],
})

export class Kidney {

    public html: string = null;
    public faqCategory: string = null;

    constructor(private api: ApiService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private seoService: SEOService) {

        router.events.subscribe((event: RouterEvent) => {
            if (event instanceof NavigationStart) {
                this.getPage(event.url);
                this.faqCategory = event.url;   
            }
            else if (event instanceof NavigationEnd) {
                var meta = (activatedRoute.children[0].data as any).value;
                seoService.updateTitle(meta.title);
                seoService.updateDescription(meta.description);
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