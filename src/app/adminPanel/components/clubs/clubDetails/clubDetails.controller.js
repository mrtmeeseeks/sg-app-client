const SERVICE = new WeakMap();


export class ClubDetailsController {

  constructor($stateParams, ClubsService, $state, $window) {
    'ngInject';
    this.$stateParams = $stateParams;
    this.$window = $window;
    SERVICE.set(this, ClubsService.resource);
    this.$state = $state;
    this.getClub($stateParams.clubId);
  }


  getClub(clubId) {
    SERVICE.get(this).get({clubId: clubId}).$promise.then((response)=> {
      this.club = response;
      console.log(response);
    }, (error)=> {
      console.log(error);
    });
  }

  save() {
    this.club['wrapper'] = 'club';
    SERVICE.get(this).update({clubId: this.club.id}, this.club).$promise.then((response) => {
      console.log(response);
    }, ()=> {
    });
  }

  cancel(){
    this.getClub(this.club.id);
  }


  delete() {
    if (this.$window.confirm('You sure you want to delete this Professor?')) {
      SERVICE.get(this).delete({clubId: this.club.id}).$promise.then(()=> {
        this.$state.go('adminPanel.clubs');
      }, (error)=> {
        console.log(error);
      });
    }
  }




}
