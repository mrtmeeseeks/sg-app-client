const SERVICE = new WeakMap();

export class AddTeamMemberController {
  constructor(TeamMemberService, $modalInstance) {
    'ngInject';

    this.$modalInstance = $modalInstance;
    SERVICE.set(this, TeamMemberService.resource);
  }


  add() {
    this.member['wrapper'] = 'team_member';
    SERVICE.get(this).add({}, this.member);
    this.$modalInstance.dismiss();
  }


  cancel() {
    this.$modalInstance.dismiss();
  }


}
