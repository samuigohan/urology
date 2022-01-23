import { Component } from "@angular/core";
import * as $ from 'jquery';

@Component({
    selector: 'landing',
    templateUrl: './landing.html',
    styleUrls: ['./landing.scss'],
})

export class Landing {
    constructor() {
    }

    ngOnInit() {
        this.createParallax();
    }

    private createParallax() {
        $('.parallax-section').each(function () {
            var $el = $(this);
            $(window).on('scroll', function () {
                updateBackground($el);
            });
            updateBackground($el);
        });
        function updateBackground($el) {
            const speed = 0.4;
            const diff = $(window).scrollTop() - $el.offset().top;
            const yPos = -(diff * speed);
            const coords = '50% ' + yPos + 'px';
            $el.css({
                backgroundPosition: coords
            });
        }
    }
}