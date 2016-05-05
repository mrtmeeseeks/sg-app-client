/**
 * Created by test most on 5/4/2016.
 */
const SERVICE = new WeakMap();
export function TeamMemberDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/adminPanel/components/team_members/team_member.html',
    scope: {
      model: '='
    },
    controller: TeamMemberController,
    controllerAs: 'tmc',
    bindToController: true
  };

  return directive;
}

class TeamMemberController{
  constructor( $window , TeamMemberService) {
    'ngInject';
    SERVICE.set(this, TeamMemberService.resource);
    this.$window = $window;


  }


  delete() {
    if (this.$window.confirm('You sure you want to delete this Team Member?')) {
      SERVICE.get(this).delete({teamMemberId: this.model.id}).$promise.then(() => {
        },
        (error) => {
          console.log(error.statusText);
        });
    }
  }



}
