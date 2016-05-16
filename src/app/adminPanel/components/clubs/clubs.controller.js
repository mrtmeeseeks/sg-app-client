const SERVICE = new WeakMap();

export class ClubsController {

  constructor($modal, ClubsService) {
    'ngInject';
    this.$modal = $modal;
    SERVICE.set(this, ClubsService.resource);

    //--------- PAGINATION PROPERTIES ----------
    this.paginationRange = [];
    this.currentPage = 1;
    this.numPerPage = 10;
    this.maxSize = 5;

    this.getClubs();
  }


  getClubs() {
    this.loading = true;
    SERVICE.get(this).query().$promise.then((response) => {
        this.clubs = response;
        this.pageChanged();
      },
      (error) => {
        console.log(error);
      }).finally(()=> {
      this.loading = false;
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


  //------------ PAGINATION ------------
  pageChanged() {
    var begin = ((this.currentPage - 1) * this.numPerPage), end = begin + this.numPerPage;
    this.paginationRange = this.clubs.slice(begin, end);
  }


}
