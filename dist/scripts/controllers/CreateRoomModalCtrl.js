function CreateRoomModalCtrl ($uibModalInstance, Room, UserService) {

  var vm = this;

  vm.create = function (newRoomName) {
    $uibModalInstance.close();
    addNewRoom(newRoomName);
  };

  vm.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
}

angular
.module('dragonSlayerChat')
.controller('CreateRoomModalCtrl',['$uibModalInstance', 'Room', CreateRoomModalCtrl]);
