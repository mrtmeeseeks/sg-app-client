const Q = new WeakMap();
const HTTP = new WeakMap();
const USERINFO = new WeakMap();

export class AuthService {

  constructor($http, $window ,  $q , api , $rootScope) {
    'ngInject';

    this.$window = $window;
    this.$http = $http;
    this.api = api;
    this.userInfo = {};
    USERINFO.set(this, this.userInfo);

    this.$q = $q;
    Q.set(this, $q);
    HTTP.set(this, $http);
    this.$rootScope = $rootScope;
  }

  //LOG IN
  login(user) {

    var deferred = Q.get(this).defer();


  HTTP.get(this).post(this.api+"v1/admins_sessions", user)
    .then(
    response => {

      if(response.status == 200) {
        console.log(response);


        this.userInfo = {//generate an access token on the server for the user
          accessToken: response.data.extract.auth_token
        };

        console.log("------------");
        console.log(this.userInfo);
        this.$rootScope.$emit('user:loggedin', this.userInfo); //broadcast to all controllers that  the user has logged in
        this.$window.sessionStorage["userInfo"] = JSON.stringify(this.userInfo);//store the data on the client
        deferred.resolve();
      } else {
        deferred.reject(response);
      }

    });

  return deferred.promise;
};




////LOG OUT todo: ask for endpoint?
//  logout() {
//  var deferred = Q.get(this).defer();
//
//  HTTP.get(this)({
//    url: this.api + '/account/logout' ,
//    method: 'POST',
//    headers:  {'Authorization': 'Bearer '+  JSON.parse($window.sessionStorage["userInfo"]).accessToken }
//
//  }).then( function(){
//    this.$window.sessionStorage["userInfo"]  = null;
//    this.$rootScope.$emit('user:loggedout'); //broadcast to all controllers that  the user has logged out
//    deferred.resolve();
//  }, function(error) {
//    deferred.reject();
//  });
//  return deferred.promise;
//};








////REGISTER
//  register(user) { //todo modify when api is ready
//  var deferred = Q.defer();
//  this.$http.post( this.api +"/account/register", {"First_Name": user.first_name, "Last_Name": user.last_name, "Email": user.email , "Password": user.password , "ConfirmPassword": user.confirmPassword })
//    .then(
//      function() {
//        deferred.resolve();
//      },
//      function(error){
//        deferred.reject(error.data.ModelState[0]);
//      });
//
//  return deferred.promise;
//};



}
