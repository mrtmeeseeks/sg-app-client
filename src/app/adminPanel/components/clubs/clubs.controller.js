const SERVICE = new WeakMap();

export class ClubsController {

  constructor($modal, ClubsService) {
    'ngInject';
    this.$modal = $modal;
    SERVICE.set(this, ClubsService.resource);



    this.clubs = [
      {
        name: "spaces",
        id: "1",
        professorId: "who knows, who cares",
        president: "mitko the tiger",
        department: "cos"
      },
      {
        name: "spaces",
        id: "2",
        professorId: "who knows, who cares",
        president: "mitko the tiger",
        department: "cos"
      },
      {
        name: "spaces",
        id: "3",
        professorId: "who knows, who cares",
        president: "mitko the tiger",
        department: "cos"
      },
      {
        name: "spaces",
        id: "4",
        professorId: "who knows, who cares",
        president: "mitko the tiger",
        department: "cos"
      },
      {
        name: "spaces",
        id: "5",
        professorId: "who knows, who cares",
        president: "mitko the tiger",
        department: "cos"
      },
      {
        name: "spaces",
        id: "6",
        professorId: "who knows, who cares",
        president: "mitko the tiger",
        department: "cos"
      },
      {
        name: "spaces",
        id: "7",
        professorId: "who knows, who cares",
        president: "mitko the tiger",
        department: "cos"
      },
      {
        name: "spaces",
        id: "8",
        professorId: "who knows, who cares",
        president: "mitko the tiger",
        department: "cos"
      }
    ];

    //todo:  API request body?
    //this.getClubs();
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
