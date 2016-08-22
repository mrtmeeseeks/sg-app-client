/**
 * Created by hgeorgiev on 8/22/16.
 */
import {RouterConfig} from "@angular/router";
import {Home} from "./home/home.component";

// async components must be named routes for WebpackAsyncRoute
export const FrontEndRoutes:RouterConfig = [
    { path: '',      component: Home },
    { path: 'home',  component: Home },
];
