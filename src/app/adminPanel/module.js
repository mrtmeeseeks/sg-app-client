import { AdminRouterConfig } from './route'
import { AdminConfig}  from './config';
import { TeamController } from './components/team_members/team.controller';
import { ProfessorsController } from './components/professors/professors.controller';
import { LoginController } from './components/users/login.controller';
import { ClubsController } from './components/clubs/clubs.controller';
import { InternshipsController } from './components/internships/internships.controller';
import { AddTeamMemberController } from './components/team_members/addTeamMember/addTeamMember.controller';
import { AddClubController } from './components/clubs/addClub/addClub.controller';
import { AddProfessorController } from './components/professors/addProfessor/addProfessor.controller';
import { AddInternshipController } from './components/internships/addInternship/addInternship.controller';
import { ProfessorDetailsController } from './components/professors/professorDetails/professorDetails.controller';
import { ClubDetailsController } from './components/clubs/clubDetails/clubDetails.controller';
import { AuthService } from './components/users/auth.service';
import { TeamMemberService } from './components/team_members/teamMember.service.js';
import { ProfessorsService } from './components/professors/professors.service';
import { InternshipsService } from './components/internships/internships.service';
import { ClubsService } from './components/clubs/clubs.service';
import { AuthInterceptor } from './components/users/authInterceptor.service'; //intercept http requests and put tokens on them
import { NavbarDirective } from './directives/navbar/navbar.directive';
import { MenuButtonDirective } from './directives/menuButton/menuButton.directive';
var adminModule = 'adminPanel';
 angular.module(adminModule , [ 'ngAnimate', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap', 'toastr', 'ngFileUpload'])
  .constant('api', "http://sgaubg.herokuapp.com/api/")
  .config(AdminRouterConfig)
  .config(AdminConfig)
  .service('AuthService', AuthService)
  .service('TeamMemberService', TeamMemberService)
  .service('InternshipsService', InternshipsService)
  .service('ClubsService', ClubsService)
  .service('ProfessorsService', ProfessorsService)
  .service('AuthInterceptor', AuthInterceptor)
  .controller('TeamController', TeamController)
  .controller('ProfessorsController', ProfessorsController)
  .controller('LoginController', LoginController)
  .controller('InternshipsController', InternshipsController)
  .controller('ClubsController', ClubsController)
  .controller('AddTeamMemberController', AddTeamMemberController)
  .controller('AddProfessorController', AddProfessorController)
  .controller('AddClubController', AddClubController)
  .controller('AddInternshipController', AddInternshipController)
  .controller('ProfessorDetailsController', ProfessorDetailsController)
  .controller('ClubDetailsController', ClubDetailsController)
  .directive('acmeNavbar', NavbarDirective)
  .directive('menuButton', MenuButtonDirective);

export default adminModule;
