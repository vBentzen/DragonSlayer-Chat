function CreateRoomCtrl ($uibModal, $log, $document) {
  var vm = this;

  vm.animationsEnabled = true;

  vm.open = function (size, parentSelector) {
    var parentElem = parentSelector ?
      angular.element($document[0].querySelector('.createRoomHolder ' + parentSelector)) : undefined;
    var modalInstance = $uibModal.open({
      animation: vm.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'createRoomModal.html',
      controller: 'CreateRoomModalCtrl',
      controllerAs: 'vm',
      size: size,
      appendTo: parentElem,
    });

    modalInstance.result.then(function (selectedItem) {
      vm.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };



  vm.toggleAnimation = function () {
    vm.animationsEnabled = !vm.animationsEnabled;
  };
}

angular
.module('dragonSlayerChat')
.controller('CreateRoomCtrl', CreateRoomCtrl);
