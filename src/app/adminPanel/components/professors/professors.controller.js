/**
 * Created by AcerPC on 3/31/2016.
 */
const SERVICE = new WeakMap();
var edor = {};


export class ProfessorsController {

  constructor($modal, ProfessorsService, $scope) {
    'ngInject';
    SERVICE.set(edor, ProfessorsService.resource);
    this.$modal = $modal;
    this.filtText = '';
    this.tab = 1;

    $scope.$on('professorAdded', this.getProfessors);


    this.getProfessors();


    //--------- PAGINATION PROPERTIES ----------
    this.paginationRange = [];
    this.currentPage = 1;
    this.numPerPage = 10;
    this.maxSize = 5;

  }








  //---------- NAVIGATION ------------
  select(setTab){
    this.tab = setTab;
    if (setTab === 2) {
      this.filtText = "bus";
    }
    else if (setTab === 3) {
      this.filtText = "cos";
    }
    else if (setTab === 4) {
      this.filtText = "eco";
    }
    else if (setTab === 5) {
      this.filtText = "eng";
    }
    else if (setTab === 6) {
      this.filtText = "hty";
    }
    else if (setTab === 7) {
      this.filtText = "inf";
    }
    else if (setTab === 8) {
      this.filtText = "jmc";
    }
    else if (setTab === 9) {
      this.filtText = "mat";
    }
    else if (setTab === 10) {
      this.filtText = "pos";
    }
    else {
      this.filtText = "";
    }
  };
  isSelected(checkTab) {
    return (this.tab === checkTab);
  };






  addProfessor() {
    this.$modal.open({
      animation: true,
      templateUrl: 'app/adminPanel/components/professors/addProfessor/addProfessor.html',
      controller: 'AddProfessorController',
      controllerAs: 'apr',
      size: 'md'
    });
  }



  getProfessors(){
    SERVICE.get(edor).query().$promise.then( result => {
      this.professorsArray = result;
      this.pageChanged();
    });
  }



  //------------ PAGINATION ------------
  pageChanged() {
    var begin = ((this.currentPage - 1) * this.numPerPage), end = begin + this.numPerPage;
    this.paginationRange = this.professorsArray.slice(begin, end);
  }

}
