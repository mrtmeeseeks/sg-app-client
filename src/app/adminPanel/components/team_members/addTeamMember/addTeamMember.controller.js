const SERVICE = new WeakMap();

export class AddTeamMemberController {
  constructor(TeamMemberService , $modalInstance) {
    'ngInject';

    this.$modalInstance = $modalInstance;
    SERVICE.set(this, TeamMemberService.resource);



  }



  register(user){
    this.$modalInstance.dismiss();
  }


  cancel(){
    this.$modalInstance.dismiss();
  }



}
