const SERVICE = new WeakMap();

export class AddProfessorController {

  constructor(ProfessorsService, $rootScope, $modalInstance, $scope) {
    'ngInject';

    SERVICE.set(this, ProfessorsService.resource);
    this.$modalInstance = $modalInstance;
    this.$rootScope = $rootScope;
    this.$scope = $scope;



  }


  add() {
    this.newProfessor['wrapper'] = 'professor';
    SERVICE.get(this).add({}, this.newProfessor);
    this.$modalInstance.dismiss();
  }




  closeRegistrationForm(){
    this.$modalInstance.dismiss();
  }

}


