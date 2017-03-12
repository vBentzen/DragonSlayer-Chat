function SetUserNameModalCtrl ($uibModalInstance, $cookies) {
  var vm = this;

  vm.create = function (newName) {
    if (!newName) {
      console.log('Enter a real name')
    } else {
      $uibModalInstance.close();
      $cookies.put('dsChatCurrentUser', newName);
      var currentUser = $cookies.get('dsChatCurrentUser');
      console.log('Setting User to ' + currentUser);
    }
  }
}

angular
.module('dragonSlayerChat')
.controller('SetUserNameModalCtrl',['$uibModalInstance', '$cookies', SetUserNameModalCtrl]);
