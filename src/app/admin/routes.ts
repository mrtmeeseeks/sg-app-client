import {RouterConfig} from "@angular/router";
import {Admin} from "./admin.component";
import {Login} from "./login/login.component";
import {AdminGuard} from "./adminGuard";
import {Dashboard} from "./dashboard/dashboard.component";
import {AdminProfessors} from "./dashboard/professors/professors.component";
import {AdminClubs} from "./dashboard/clubs/clubs.component"
import {AdminTeamMembers} from "./dashboard/team_members/team_members.component";
import {AdminInternships} from "./dashboard/internships/internships.component";
// async components must be named routes for WebpackAsyncRoute
export const AdminRoutes:RouterConfig = [
    {
        path: 'admin', component: Admin,
        children: [
            {path: 'login', component: Login },
            {path: 'dashboard', component: Dashboard , canActivate: [AdminGuard],
                children: [
                    {path:'professors' , component: AdminProfessors },
                    {path: 'clubs', component: AdminClubs},
                    {path: 'team_members' , component: AdminTeamMembers},
                    {path: 'internships', component: AdminInternships}
                ]}

        ]
    }
];
