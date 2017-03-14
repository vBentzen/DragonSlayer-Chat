function UserService () {
  this.create = function (name) {
    console.log('hej');
  };
}

angular
  .module('dragonSlayerChat')
  .service('UserService', UserService);
