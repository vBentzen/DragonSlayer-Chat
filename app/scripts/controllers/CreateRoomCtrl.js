angular.module('dragonSlayerChat').controller('CreateRoomCtrl', function ($uibModal, $log, $document) {
  var $ctrl = this;

  $ctrl.animationsEnabled = true;

  $ctrl.open = function (size, parentSelector) {
    var parentElem = parentSelector ?
      angular.element($document[0].querySelector('.createRoomHolder ' + parentSelector)) : undefined;
    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'createRoomModal.html',
      controller: 'CreateRoomModalCtrl',
      controllerAs: '$ctrl',
      size: size,
      appendTo: parentElem,
    });

    modalInstance.result.then(function (selectedItem) {
      $ctrl.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };



  $ctrl.toggleAnimation = function () {
    $ctrl.animationsEnabled = !$ctrl.animationsEnabled;
  };
});

angular.module('dragonSlayerChat').controller('CreateRoomModalCtrl', function ($uibModalInstance, Room) {
  var $ctrl = this;


  $ctrl.create = function () {
    Room.addRoom();
    $uibModalInstance.close();
  };

  $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
