export function routerConfig($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('adminPanel', {
      abstract: true,
      url: '/admin',
      template: '<div ui-view></div>'
    })
    .state('frontEnd', {
      abstract: true,
      url: '/',
      template: '<div ui-view></div>',
    })
  ;

  $urlRouterProvider.otherwise('/');
}
