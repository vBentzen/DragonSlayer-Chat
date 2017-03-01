function UserService () {
  var vm = this;


  vm.sayGoodbye = function () {
    console.log('hej');
  };
}

angular
  .module('dragonSlayerChat')
  .service('UserService', [UserService]);
