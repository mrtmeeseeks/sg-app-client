export function NavbarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/adminPanel/directives/navbar/navbar.html',
    scope: {
      creationDate: '='
    },
    controller: NavbarController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class NavbarController {
  constructor( $window, AuthService) {
    'ngInject';

    this.$window = $window;
    this.AuthService = AuthService;
  }

  logout() {

    this.AuthService.logout();

  }


}
