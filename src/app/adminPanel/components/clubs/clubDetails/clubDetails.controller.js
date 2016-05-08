const SERVICE = new WeakMap();


export class ClubDetailsController {

  constructor($stateParams, ClubsService, $state) {
    'ngInject';
    this.$stateParams = $stateParams;
    SERVICE.set(this, ClubsService.resource);
    this.$state = $state;




    this.getClub($stateParams.clubId);
  }


  getClub(clubId) {
    SERVICE.get(this).get({clubId: clubId}).$promise.then((response)=> {
      this.club = response;
    }, (error)=> {
      console.log(error);
    });
  }


  deleteClub() {
    SERVICE.get(this).delete({clubId: this.club.id}).$promise.then(()=> {
      this.$state.go('adminPanel.clubs');
    }, (error)=> {
      console.log(error);
    });
  }
}
