/**
 * Created by test most on 5/4/2016.
 */
const SERVICE = new WeakMap();
export function InternshipDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/adminPanel/components/internships/internship.partial.html',
    scope: {
      model: '='
    },
    controller: InternshipController,
    controllerAs: 'int',
    bindToController: true
  };

  return directive;
}

class InternshipController {
  constructor( $window , InternshipsService) {
    'ngInject';

    this.$window = $window;
  }




}
