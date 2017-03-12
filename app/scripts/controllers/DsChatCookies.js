(function() {
  function DsChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('dsChatCurrentUser');
    if (!currentUser || currentUser === '') {
      console.log('NoUserIsSet')
      var vm = this;

    $uibModal.open({
      controller: 'SetUserNameModalCtrl',
      controllerAs: 'vm',
      template: [
       '<div class="modal-content">',
       '<div class="modal-header">',
       '<h3 class="modal-title">Set User Name</h3>',
       '</br><p> This name will appear when you send messages</p>',
       '</div>',
       '<div class="modal-body">',
       '<input type="text" class="form-control" ng-model="vm.newUserName" placeholder="Enter userName">',
       '</div>',
       '<button class="btn btn-primary fillwidth" type="button" ng-click="vm.create(vm.newUserName)">Set Name</button>',
       '</div>'
       ].join(''),
       backdrop: 'static',
       size: 'md'
      });
    }
  }



  angular
    .module('dragonSlayerChat')
    .run(['$cookies', '$uibModal', DsChatCookies]);
})();
