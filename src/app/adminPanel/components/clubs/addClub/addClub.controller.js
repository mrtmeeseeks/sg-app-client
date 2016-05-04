const SERVICE = new WeakMap();

export class AddClubController {

  constructor($modalInstance, ClubsService) {
    'ngInject';

    this.$modalInstance = $modalInstance;
    SERVICE.set(this, ClubsService);



  }



  register(user){
    this.$modalInstance.dismiss();

  }




  cancel(){
    this.$modalInstance.dismiss();
  }







}
