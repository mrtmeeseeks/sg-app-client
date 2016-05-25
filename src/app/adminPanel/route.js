/**
 * Created by test most on 5/4/2016.
 */
export function AdminRouterConfig($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('adminPanel.login', {
      url: '/login',
      templateUrl: 'app/adminPanel/components/users/login.html',
      controller: 'LoginController',
      controllerAs: 'login'
    })
    .state('adminPanel.dashboard', {
      url: '/dashboard',
      templateUrl: 'app/adminPanel/components/dashboard/dashboard.html',
      controllerAs: 'dashboard',
      data: {
        permissions: {
          only: 'admin',
          redirectTo: 'adminPanel.login'
        }
      }
    })
    .state('adminPanel.team', {
      url: '/team',
      templateUrl: 'app/adminPanel/components/team_members/team.html',
      controller: 'TeamController',
      controllerAs: 'team',
      data: {
        permissions: {
          only: 'admin',
          redirectTo: 'adminPanel.login'
        }
      }
    })
    .state('adminPanel.professors', {
      url: '/professors',
      templateUrl: 'app/adminPanel/components/professors/professors.html',
      controller: 'ProfessorsController',
      controllerAs: 'prof',
      data: {
        permissions: {
          only: 'admin',
          redirectTo: 'adminPanel.login'
        }
      }
    })
    .state('adminPanel.professorDetails', {
      url: '/professors/:professorId',
      templateUrl: 'app/adminPanel/components/professors/professorDetails/professorDetails.html',
      controller: 'ProfessorDetailsController',
      controllerAs: 'profDetail',
      data: {
        permissions: {
          only: 'admin',
          redirectTo: 'adminPanel.login'
        }
      }
    })
    .state('adminPanel.clubs', {
      url: '/clubs',
      templateUrl: 'app/adminPanel/components/clubs/clubs.html',
      controller: 'ClubsController',
      controllerAs: 'clubsCtrl',
      data: {
        permissions: {
          only: 'admin',
          redirectTo: 'adminPanel.login'
        }
      }
    })
    .state('adminPanel.clubDetails', {
      url: '/clubs/:clubId',
      templateUrl: 'app/adminPanel/components/clubs/clubDetails/clubDetails.html',
      controller: 'ClubDetailsController',
      controllerAs: 'clubDetail',
      data: {
        permissions: {
          only: 'admin',
          redirectTo: 'adminPanel.login'
        }
      }
    })
    .state('adminPanel.internships', {
      url: '/internships',
      templateUrl: 'app/adminPanel/components/internships/internships.html',
      controller: 'InternshipsController',
      controllerAs: 'internCtrl',
      data: {
        permissions: {
          only: 'admin',
          redirectTo: 'adminPanel.login'
        }
      }
    })

  ;

  $urlRouterProvider.otherwise('/login');
}
