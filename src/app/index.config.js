export function config ($logProvider, toastrConfig, $provide, $httpProvider) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);

  // Set options third-party lib
  toastrConfig.allowHtml = true;
  toastrConfig.timeOut = 3000;
  toastrConfig.positionClass = 'toast-top-right';
  toastrConfig.preventDuplicates = true;
  toastrConfig.progressBar = true;

  //push the authInterceptor service
  //$provide.factory('authorizeInterceptor', AuthInterceptor.httpAuthFactory);
  $httpProvider.interceptors.push('AuthInterceptor');
}
