/**
 * Created by AcerPC on 3/31/2016.
 */
const SCOPE = new WeakMap();
const STATE = new WeakMap();
const TOASTR = new WeakMap();


export class LoginController {
  constructor ($state, toastr, AuthService, $scope) {
    'ngInject';

    SCOPE.set(this, $scope);
    this.AuthService = AuthService;
    this.toastr = toastr;
    this.$state = $state;
    STATE.set(this, $state);
    TOASTR.set(this, toastr);


    /** @ngInject */


  }



//------------------ LOGIN ------------------
  login(user){
    this.AuthService.login(user).then( result => {

        //console.log(result);
        STATE.get(this).go('adminPanel.dashboard');
        TOASTR.get(this).success("Login Successful!");

      }
    );
  }








  register(regUser){
    //todo when api is ready
    //this.AuthService.register(regUser).then(
    //  function() {
    //    this.$state.go('login');
    //  },
    //  function(error){
    //    this.status = error;
    //  }
    //);
    console.log(regUser);
    this.change();
    this.toastr.success("Registration Successful, Log in now" );
  }



  showToastr() {
    this.toastr.success('Login Successful');
    this.classAnimation = '';
  }




  change(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
  };
  }
