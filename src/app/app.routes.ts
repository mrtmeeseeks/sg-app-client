
import { RouterConfig } from '@angular/router';
import { NoContent } from './no-content';
import {AdminRoutes} from './admin/routes';
import {FrontEndRoutes} from './frontend/routes';
export const routes: RouterConfig = [
    ...AdminRoutes,
    ...FrontEndRoutes,
  { path: '**',    component: NoContent },
];

