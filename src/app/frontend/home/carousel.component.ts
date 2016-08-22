/**
 * Created by hgeorgiev on 8/22/16.
 */
import {Component} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {CAROUSEL_DIRECTIVES} from "ng2-bootstrap/ng2-bootstrap";




@Component({
    selector: 'carousel',
    directives: [CAROUSEL_DIRECTIVES, CORE_DIRECTIVES, ],
    templateUrl: './carousel.template.html'
})
export class Carousel {
    public myInterval:number = 5000;
    public noWrapSlides:boolean = false;
    public slides:Array<any> = [];

    public constructor() {
        for (let i = 0; i < 4; i++) {
            this.addSlide();
        }
    }

    public addSlide():void {
        let newWidth = 2000 + this.slides.length + 1;
        this.slides.push({
            image: `//placekitten.com/${newWidth}/400`,
            text: `${['More', 'Extra', 'Lots of', 'Surplus'][this.slides.length % 4]}
      ${['Cats', 'Kittys', 'Felines', 'Cutes'][this.slides.length % 4]}`
        });
    }




}
