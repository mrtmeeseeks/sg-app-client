const SERVICE = new WeakMap();

export class InternshipsController {

  constructor($window, $modal, InternshipsService) {
    'ngInject';
    this.$modal = $modal;
    this.$window = $window;
    SERVICE.set(this, InternshipsService.resource);


    this.internshipsArray = [
      {
        name: "Internship in Centroida",
        id: "1",
        description: "Front End developer",
        link: "centroida.co"
      },
      {
        name: "Internship in Centroida",
        id: "1",
        description: "Back End developer",
        link: "centroida.co"
      },
      {
        name: "Internship in Centroida",
        id: "1",
        description: "iOS developer",
        link: "centroida.co"
      },
      {
        name: "Internship in Centroida",
        id: "1",
        description: "Android developer",
        link: "centroida.co"
      },
      {
        name: "Internship in Centroida",
        id: "1",
        description: "php developer",
        link: "centroida.co"
      },
      {
        name: "Internship in Centroida",
        id: "1",
        description: "marketing",
        link: "centroida.co"
      }

    ];

    //todo: API request body?
    //this.getInternships();
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



  deleteInternship(internshipId) {
    if (this.$window.confirm('You sure you want to delete this member?')) {
      SERVICE.get(this).delete({internshipId: internshipId}).$promise.then(() => {
        },
        (error) => {
          console.log(error.statusText);
        });
    }
  }

}
