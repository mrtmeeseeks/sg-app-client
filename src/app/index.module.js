/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import adminPanel  from './adminPanel/module'
import frontEnd from './frontEnd/module'

angular.module('sg', [adminPanel , 'frontEnd'])
  .constant('api', "http://sgaubg.herokuapp.com/api/")
  .config(config)
  .config(routerConfig)
  .run(runBlock)


