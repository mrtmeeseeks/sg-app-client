const SERVICE = new WeakMap();
var clubs = {};
var professors = {};

export class AddClubController {

  constructor($modalInstance, ClubsService, ProfessorsService) {
    'ngInject';

    this.$modalInstance = $modalInstance;
    SERVICE.set(clubs, ClubsService.resource);
    SERVICE.set(professors, ProfessorsService.resource);


    this.getProfessors();
  }


  getProfessors() {
    SERVICE.get(professors).query().$promise.then(response=> {
      this.professorsArray = response;
      console.log(response);
    }, ()=> {
    });
  }


  add() {

    this.newClub['wrapper'] = 'club';
    SERVICE.get(clubs).add({}, this.newClub);
    this.$modalInstance.dismiss();

  }


  cancel() {
    this.$modalInstance.dismiss();
  }


}
