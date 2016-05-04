const SERVICE = new WeakMap();

export class ProfessorDetailsController {

  constructor($modal, $scope, $stateParams, ProfessorsService, $state) {
    'ngInject';

    this.$scope = $scope;
    this.$stateParams = $stateParams;
    this.$modal = $modal;
    this.$state = $state;
    SERVICE.set(this, ProfessorsService.resource);

    this.getProfessor(this.$stateParams.professorId);
  }




  getProfessor(professorId) {
    SERVICE.get(this).get({professorId: professorId}).$promise.then(result => {
      this.professorDetails = result;

      // converts the photo URL to base 64
      this.toDataUrl(this.professorDetails.photo, (base64Img) => {
        this.professorDetails.image_json = base64Img;
      });
    });
  }




  saveProfessorEditing(professorId) {
    console.log('------------');
    delete this.professorDetails.photo;
    var professorObj = JSON.parse('{"professor":' + JSON.stringify(this.professorDetails) + '}');
    SERVICE.get(this).update({professorId: professorId}, professorObj).$promise.then((response) => {
      this.professorDetails = response;
    });
  }




  deleteProfessor(professorId) {
    SERVICE.get(this).delete({professorId: professorId}).$promise.then((result)=> {
      this.$state.go('professors');
      console.log('finally deleted');
    }, (error)=> {
      console.log(error);
    });
  }





  //---------------- UPLOAD FILE ----------------
  uploadPic(file) {

    if ((file )|| true) {
      var FR= new FileReader();
      FR.onload = (e) => {
        this.professorDetails.image_json = e.target.result;
      };
      FR.readAsDataURL( file );
    }
    file.progress=100;


  }




//----------------  BASE 64 CONVERTER ------------------
  toDataUrl(url, callback, outputFormat) {
    var img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = function () {
      var canvas = document.createElement('CANVAS');
      var ctx = canvas.getContext('2d');
      var dataURL;
      canvas.height = this.height;
      canvas.width = this.width;
      ctx.drawImage(this, 0, 0);
      dataURL = canvas.toDataURL(outputFormat);
      callback(dataURL);
      canvas = null;
    };
    img.src = url;
  }

}
