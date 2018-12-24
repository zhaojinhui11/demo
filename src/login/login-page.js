import { log } from "../common/util";
import template from './login-page.html';

const name = 'loginPage';  
const bindings = {};
const controller = function() {
  this.loginTitle = 'Welcome to the Chinasoft landing page';
};

export default {
  name,
  template,
  bindings,
  controller,
}