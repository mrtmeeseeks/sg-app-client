const Q = new WeakMap();
const WINDOW = new WeakMap();

const STATE = new WeakMap();
var edor = {};

export class AuthInterceptor {


  constructor( $q, $window) {

    'ngInject';
    this.$q = $q;
    this.$window = $window;

    Q.set(edor, $q);
    WINDOW.set(edor, $window);

    //STATE.set(edor, $state);

  }


  request(config) {
    config.headers = config.headers || {};
    if ( WINDOW.get(edor).sessionStorage["userInfo"] === undefined) {

    } else {
      config.headers.Authorization = JSON.parse(WINDOW.get(edor).sessionStorage["userInfo"]).accessToken;
    }
    return config;
  }



  response(response) {
    return response || Q.get(edor).when(response);
  }



  responseError(rejection) {
    return Q.get(edor).reject(rejection);

  }

  //static httpAuthFactory($q, $injector) {
  //  return new AuthInterceptor($q, $injector);
  //}


}
