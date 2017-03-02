(function() {
  function MessageCtrl(Message, $stateParams) {
    this.messages = Message.getByRoomId($stateParams.roomId);
  }

  angular
  .module('dragonSlayerChat')
  .controller('MessageCtrl', ['Message', '$stateParams', MessageCtrl]);
})();
