/**
 * Created by test most on 5/4/2016.
 */
var frontEndModule = 'frontEnd';
angular.module(frontEndModule , [ 'ngAnimate', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap'])
.constant('api', "http://sgaubg.herokuapp.com/api/");

export default frontEndModule;
