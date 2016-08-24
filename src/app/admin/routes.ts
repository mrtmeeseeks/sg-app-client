import {RouterConfig} from "@angular/router";
import {Admin} from "./admin.component";
import {Login} from "./login/login.component";
import {AdminGuard} from "./adminGuard";
import {Dashboard} from "./dashboard/dashboard.component";
import {AdminProfessors} from "./dashboard/professors/professors.component";
import {AdminClubs} from "./dashboard/clubs/clubs.component"
import {AdminTeamMembers} from "./dashboard/team_members/team_members.component";
import {AdminInternships} from "./dashboard/internships/internships.component";
import {AdminProfessorDetail} from "./dashboard/professors/professor-detail.component";
// async components must be named routes for WebpackAsyncRoute
export const AdminRoutes:RouterConfig = [
    {
        path: 'admin', component: Admin,
        children: [
            {path: 'login', component: Login },
            {path: 'dashboard', component: Dashboard , canActivate: [AdminGuard],
                children: [
                    {path: '', redirectTo: 'professors', pathMatch: 'full' },
                    {path: 'professors' , component: AdminProfessors },
                    {path: 'professor/:id' , component: AdminProfessorDetail},
                    {path: 'clubs', component: AdminClubs},
                    {path: 'team_members' , component: AdminTeamMembers},
                    {path: 'internships', component: AdminInternships}
                ]}

        ]
    }
];
