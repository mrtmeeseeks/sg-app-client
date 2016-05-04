const SERVICE = new WeakMap();

export class AddProfessorController {

  constructor(ProfessorsService, $rootScope, $modalInstance, $scope) {
    'ngInject';

    SERVICE.set(this, ProfessorsService.resource);
    this.$modalInstance = $modalInstance;
    this.$rootScope = $rootScope;
    this.newProfessor = {};
    this.$scope = $scope;



  }





  //---------------- UPLOAD PICTURE ----------------
  uploadPic(file) {

    if ((file )|| true) {
      var FR= new FileReader();
      FR.onload = (e) => {
        this.newProfessor.image_json = e.target.result;
      };
      FR.readAsDataURL( file );
    }
    file.progress=100;


}






  addNewProfessor(newProfessor) {

    SERVICE.get(this).add({}, JSON.parse('{"professor":'+JSON.stringify(newProfessor)+'}'));


    console.log('new professor posted to api');
    //this.$rootScope.$broadcast("professorAdded");

    this.$modalInstance.dismiss();

  }




  closeRegistrationForm(){
    console.log("close modal vella");
    this.$modalInstance.dismiss();
  }

}


