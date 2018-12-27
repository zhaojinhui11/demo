import template from './login-page.html';
import { log } from "../common/util";

const name = 'loginPage';
const bindings = {};
const controller = function (loginService) {
  'ngInject'
  this.logins = [];
  loginService.fetch().then(resp => {
    // log(resp);
    //log(this);
    this.logins = resp.data;
    log(this.logins);
  })

  this.login = function () {
    this.logins.forEach(loginuser => {
      if (loginuser.username == this.username && loginuser.password == this.password) {
        log("login successfully");
        window.location.href =("../user?loginusername="+loginuser.username);
        // window.location=("http://localhost:8000/pages/user/");
      }
    });

    // $http.get("/stub/login.json").then(function(data){
    //   console.log(data.data);
    // })

  }
};

export default {
  name,
  template,
  bindings,
  controller,
}