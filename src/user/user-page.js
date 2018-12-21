import { log } from "../common/util";
import template from './user-page.html';

const name = 'userPage';
const bindings = {};
const controller = function(userService){
   'ngInject'
   this.userTitle = 'I am user......';
   this.users = [];
   userService.fetch().then(resp => {
   log(this);
   this.users =resp.data;
   log(this.users);
   })
};

export default{
  name,
  template,
  bindings,
  controller
}
