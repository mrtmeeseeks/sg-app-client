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
  constructor( $window , InternshipsService, $rootScope) {
    'ngInject';
    SERVICE.set(this, InternshipsService.resource);
    this.$window = $window;
    this.$rootScope = $rootScope;

  }


  delete() {
    if (this.$window.confirm('You sure you want to delete this internship?')) {
      SERVICE.get(this).delete({internshipId: this.model.id}).$promise.then(() => {
        this.$rootScope.$broadcast("internshipDeleted");
        },
        (error) => {
          console.log(error.statusText);
        });
    }
  }


  cancel(){ //todo: discuss if there is a better way to do the Cancel
    this.$rootScope.$broadcast('cancelInternshipEditing');
  }

  save() {
    this.model['wrapper'] = 'internship';
    SERVICE.get(this).update({internshipId: this.model.id}, this.model).$promise.then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error.statusText);
    })
  }




}
