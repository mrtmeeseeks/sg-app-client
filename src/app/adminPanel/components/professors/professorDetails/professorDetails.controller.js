const SERVICE = new WeakMap();

export class ProfessorDetailsController {

  constructor($modal, $scope, $stateParams, ProfessorsService, $state, $window) {
    'ngInject';

    this.$scope = $scope;
    this.$stateParams = $stateParams;
    this.$modal = $modal;
    this.$state = $state;
    this.$window = $window;
    SERVICE.set(this, ProfessorsService.resource);

    this.getProfessor(this.$stateParams.professorId);
  }


  getProfessor(professorId) {
    SERVICE.get(this).get({professorId: professorId}).$promise.then(result => {
      this.professorDetails = result;
    });
  }


  save() {
    this.professorDetails['wrapper'] = 'professor';
    SERVICE.get(this).update({professorId: this.professorDetails.id}, this.professorDetails).$promise.then((response) => {
      console.log(response);
    }, ()=> {
    });
  }


  cancel(){
    this.getProfessor(this.professorDetails.id);
  }


  delete() {
    if (this.$window.confirm('You sure you want to delete this Professor?')) {
      SERVICE.get(this).delete({professorId: this.professorDetails.id}).$promise.then(()=> {
        this.$state.go('adminPanel.professors');
      }, (error)=> {
        console.log(error);
      });
    }
  }








}
