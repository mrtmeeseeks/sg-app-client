import {RouterConfig} from "@angular/router";
import {Admin} from "./admin.component";
import {Login} from "./login/login.component";
import {AdminGuard} from "./adminGuard";
import {Dashboard} from "./dashboard/dashboard.component";
import {Professors} from "./dashboard/professors/professors.component";
import {Clubs} from "./dashboard/clubs/clubs.component"
import {TeamMembers} from "./dashboard/team_members/team_members.component";
// async components must be named routes for WebpackAsyncRoute
export const AdminRoutes:RouterConfig = [
    {
        path: 'admin', component: Admin,
        children: [
            {path: 'login', component: Login },
            {path: 'dashboard', component: Dashboard , canActivate: [AdminGuard],
                children: [
                    {path:'professors' , component: Professors },
                    {path: 'clubs', component: Clubs},
                    {path: 'team_members' , component: TeamMembers}
                ]}

        ]
    }
];
