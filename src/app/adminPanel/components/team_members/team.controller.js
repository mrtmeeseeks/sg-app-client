const SERVICE = new WeakMap();

export class TeamController {

  constructor($modal, $scope, $window, TeamMemberService) {
    'ngInject';

    SERVICE.set(this, TeamMemberService.resource);
    this.$window = $window;
    this.$modal = $modal;
    this.$scope =$scope;


    //--------- PAGINATION PROPERTIES ----------
    this.paginationRange = [];
    this.currentPage = 1;
    this.numPerPage = 10;
    this.maxSize = 5;


    this.getTeamMembers();
  }




  getTeamMembers(){
    SERVICE.get(this).query().$promise.then( response => {
      this.teamMembers = response;
      console.log(response);
      this.pageChanged();

    }, error => {
      console.log(error);
    });
  }




  addMember() {
    this.$modal.open({
      animation: true,
      templateUrl: 'app/adminPanel/components/team_members/addTeamMember/addTeamMember.html',
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
  pageChanged() {
    var begin = ((this.currentPage - 1) * this.numPerPage), end = begin + this.numPerPage;
    this.paginationRange = this.teamMembers.slice(begin, end);
  }
}
