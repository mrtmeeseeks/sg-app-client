const SERVICE = new WeakMap();

export class AddClubController {

  constructor($modalInstance, ClubsService) {
    'ngInject';

    this.$modalInstance = $modalInstance;
    SERVICE.set(this, ClubsService);



  }



  add(){

    this.newClub['wrapper'] = 'club';
    SERVICE.get(this).add({}, this.newClub);
    this.$modalInstance.dismiss();

  }




  cancel(){
    this.$modalInstance.dismiss();
  }







}
