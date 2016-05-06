const SERVICE = new WeakMap();
var internship = {};

export class AddInternshipController {

  constructor($modalInstance, InternshipsService) {
    'ngInject';
    SERVICE.set(internship, InternshipsService.resource)
    this.$modalInstance = $modalInstance;

  }




  add(){
    this.newInternship['wrapper'] = 'internship';
    SERVICE.get(internship).add({}, this.newInternship);
    this.$modalInstance.dismiss();
  }


  cancel(){
    this.$modalInstance.dismiss();
  }







}
