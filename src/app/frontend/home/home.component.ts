import {Component, OnInit} from '@angular/core';
import {AlertComponent} from 'ng2-bootstrap/ng2-bootstrap';
import { AppState } from '../../app.service';
import { HomeNavbar } from '../shared/navbar'
import { Title } from "../shared/title/title.service";
import { Carousel } from  "./carousel.component";
import {HomeFooter} from "../shared/footer/footer.component";



@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    Title
  ],
  // We need to tell Angular's compiler which directives are in our template.
  // Doing so will allow Angular to attach our behavior to an element
  directives: [
    HomeNavbar,
    HomeFooter,
    AlertComponent,
    Carousel
  ],
  // We need to tell Angular's compiler which custom pipes are in our template.
  pipes: [ ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './home.style.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './home.template.html'
})
export class Home implements OnInit{
  // Set our default values
  date: Date = new Date();
  localState = { value: '' };
  // TypeScript public modifiers
  constructor(public appState: AppState, public title: Title) {

  }

  ngOnInit() {
    console.log('hello `Home` component');
    // this.title.getData().subscribe(data => this.data = data);
  }



}
