/**
 * Created by test most on 5/4/2016.
 */
export function AdminConfig ($logProvider, toastrConfig, $provide, $httpProvider) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);

  // Set options third-party lib
  toastrConfig.allowHtml = true;
  toastrConfig.timeOut = 2000;
  toastrConfig.positionClass = 'toast-top-right';
  toastrConfig.preventDuplicates = true;
  toastrConfig.progressBar = true;

  //push the authInterceptor service
  //$provide.factory('authorizeInterceptor', AuthInterceptor.httpAuthFactory);
  $httpProvider.interceptors.push('AuthInterceptor');
}
