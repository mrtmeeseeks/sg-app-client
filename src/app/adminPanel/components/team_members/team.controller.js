const SERVICE = new WeakMap();

export class TeamController {

  constructor($modal, $scope, $window, TeamMemberService) {
    'ngInject';

    SERVICE.set(this, TeamMemberService.resource);
    this.$window = $window;
    this.$modal = $modal;
    this.$scope =$scope;

    //--------- PAGINATION PROPERTIES ----------
    //this.filteredTodos = [];
    //this.currentPage = 1;
    //this.numPerPage = 10;
    //this.maxSize = 5;
    //this.$scope.$watch('currentPage', this.pageChanged());




    this.teamMembersArray = [
      {
        name: "teo",
        description: "14teo e backend dev"
      },
      {
        name: "teo",
        description: "15teo e meteor dev"
      }
    ];


    //this.getTeamMembers();
  }




  getTeamMembers(){
    SERVICE.get(this).query().$promise.then( response => {
      this.teamMembersArray = response;
      console.log(response.$promise);

    }, error => {
      console.log(error);
    });
  }




  addMember() {
    this.$modal.open({
      animation: true,
      templateUrl: 'app/views_controllers/team/addTeamMember/addTeamMember.html',
      controller: 'AddTeamMemberController',
      controllerAs: 'atm',
      size: 'md'
    });
  }





  deleteTeamMember(memberId){
    if(this.$window.confirm('You sure you want to delete this member?')) {
      SERVICE.get(this).delete({memberId: memberId}).$promise.then((success) => {},
        (error) => { console.log(error.statusText); });

    }
  }






  //---------------- PAGINATION -----------------
  //pageChanged() {
  //  var begin = ((this.currentPage - 1) * this.numPerPage), end = begin + this.numPerPage;
  //  this.filteredTodos = this.teamMembersArray.slice(begin, end);
  //}
}
