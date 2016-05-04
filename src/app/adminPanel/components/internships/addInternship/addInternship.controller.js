export class AddInternshipController {

  constructor($modalInstance) {
    'ngInject';


    this.$modalInstance = $modalInstance;

  }




  register(user){

    this.$modalInstance.dismiss();
  }


  cancel(){
    this.$modalInstance.dismiss();
  }







}
