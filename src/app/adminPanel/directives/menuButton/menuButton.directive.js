export function MenuButtonDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/adminPanel/directives/menuButton/menuButton.html',
    scope: {
      creationDate: '='
    },
    controller: MenuButtonController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class MenuButtonController {
  constructor () {
    'ngInject';


    // "this.creation" is available by directive option "bindToController: true"

  }



  toggleSideNavbar(){
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }


}
