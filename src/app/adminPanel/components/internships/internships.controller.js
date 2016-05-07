const SERVICE = new WeakMap();

export class InternshipsController {

  constructor($window, $modal, InternshipsService) {
    'ngInject';
    this.$modal = $modal;
    this.$window = $window;
    SERVICE.set(this, InternshipsService.resource);

    //--------- PAGINATION PROPERTIES ----------
    this.paginationRange = [];
    this.currentPage = 1;
    this.numPerPage = 10;
    this.maxSize = 5;

    this.getInternships();
  }


  getInternships() {
    SERVICE.get(this).query().$promise.then(response => {
      this.internshipsArray = response;
      this.pageChanged();
      },
      error => {
        console.log(error);
      });
  }



  addInternship() {
    this.$modal.open({
      animation: true,
      templateUrl: 'app/adminPanel/components/internships/addInternship/addInternship.html',
      controller: 'AddInternshipController',
      controllerAs: 'aic',
      size: 'md'
    });
  }




  //------------ PAGINATION ------------
  pageChanged() {
    var begin = ((this.currentPage - 1) * this.numPerPage), end = begin + this.numPerPage;
    this.paginationRange = this.internshipsArray.slice(begin, end);
  }


}
