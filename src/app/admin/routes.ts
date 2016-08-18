import {RouterConfig} from '@angular/router';
import { Admin } from './admin.component'
import { Login } from './login/login.component';
import { AdminGuard } from './adminGuard';
// async components must be named routes for WebpackAsyncRoute
export const AdminRoutes:RouterConfig = [
    {
        path: 'admin', component: Admin,
        children: [
            {path: 'login', component: Login }
        ]
    }
];
