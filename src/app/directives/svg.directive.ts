// ./app/shared/hidden.directive.ts
import { Directive, ElementRef, Renderer2 } from '@angular/core';
import * as $ from 'jquery';

// Directive decorator
@Directive({ selector: '[svg]' })
// Directive class
export class SvgDirective {
    constructor(el: ElementRef, renderer: Renderer2) {
        window.setTimeout(function () {
            let $img = jQuery(el.nativeElement);
            let imgID = $img.attr('id');
            let imgClass = $img.attr('class');
            let imgURL = $img.attr('src');

            jQuery.get(imgURL, function (data) {
                // Get the SVG tag, ignore the rest
                let $svg = jQuery(data).find('svg');

                // Add replaced image's ID to the new SVG
                if (typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                // Add replaced image's classes to the new SVG
                setTimeout(function() {
                    if (typeof imgClass !== 'undefined') {
                        $svg = $svg.attr('class', imgClass + ' loaded');
                    }
                    else {
                        $svg = $svg.attr('class', 'loaded');
                    }
                }, 25);

                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');

                // Replace image with new SVG
                $img.replaceWith($svg);

            }, 'xml');
        });
    }
}