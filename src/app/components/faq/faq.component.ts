import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'faq',
    templateUrl: './faq.html',
    styleUrls: ['./faq.scss']
})
export class FaqComponent {

    @Input() faqCategory: string = null;
    @Input() faqSubcategory: string = null;

    public html: string = '';
    public displayed: boolean = false;

    constructor(private http: HttpClient) {
        this.ngOnChanges();
    }

    public toggleFaq() {
        this.displayed = !this.displayed;
        if (this.displayed) {
            $('body').addClass('no-scroll');
        }
        else {
            $('body').removeClass('no-scroll');
        }

    }

    ngOnChanges() {
        if (!this.faqCategory || !this.faqSubcategory) {
            return;
        }
        this.http.get(`/assets/faq/${this.faqCategory}/${this.faqSubcategory}.html`, { responseType: 'text' }).subscribe(
            (response: String) => {
                this.html = response.toString();
            }
        );

        let self = this;
        $(window).on('click', function (event) {
            let target = $(event.target)
            if (target.parents('.faq-wrapper').length > 0) {
                return;
            }
            if (self.displayed) {
                self.toggleFaq();
            }
        });

        $('.faq-button').on('click',function(event) {
            event.stopPropagation();
        });
    }

}
