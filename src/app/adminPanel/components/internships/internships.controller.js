const SERVICE = new WeakMap();

export class InternshipsController {

  constructor($window, $modal, InternshipsService) {
    'ngInject';
    this.$modal = $modal;
    this.$window = $window;
    SERVICE.set(this, InternshipsService.resource);

    this.getInternships();
  }


  getInternships() {
    SERVICE.get(this).query().$promise.then(response => {
        this.internshipsArray = response;
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




}
