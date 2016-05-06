const SERVICE = new WeakMap();

export class ClubsController {

  constructor($modal, ClubsService) {
    'ngInject';
    this.$modal = $modal;
    SERVICE.set(this, ClubsService.resource);

    this.getClubs();
  }




  getClubs() {
    SERVICE.get(this).query().$promise.then((response) => {
        this.clubs= response;
      },
      (error) => {
        console.log(error);
      });
  }





  addClub() {
    this.$modal.open({
      animation: true,
      templateUrl: 'app/adminPanel/components/clubs/addClub/addClub.html',
      controller: 'AddClubController',
      controllerAs: 'acc',
      size: 'md'
    });

  }




}
