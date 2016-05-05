/**
 * Created by test most on 5/4/2016.
 */
const SERVICE = new WeakMap();
export function InternshipDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/adminPanel/components/internships/internship.html',
    scope: {
      model: '='
    },
    controller: InternshipController,
    controllerAs: 'int',
    bindToController: true
  };

  return directive;
}

class InternshipController{
  constructor( $window , InternshipsService) {
    'ngInject';
    SERVICE.set(this, InternshipsService.resource);
    this.$window = $window;


  }


  delete() {
    if (this.$window.confirm('You sure you want to delete this internship?')) {
      SERVICE.get(this).delete({internshipId: this.model.id}).$promise.then(() => {
        },
        (error) => {
          console.log(error.statusText);
        });
    }
  }



}
