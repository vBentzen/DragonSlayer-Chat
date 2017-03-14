(function() {
  function MessageCtrl(Message, $stateParams) {
    this.messages = Message.getByRoomId($stateParams.roomId);
    this.currentRoomName = $stateParams.roomName;
    this.currentRoomId = $stateParams.roomId;
  }

  angular
  .module('dragonSlayerChat')
  .controller('MessageCtrl', ['Message', '$stateParams', MessageCtrl]);
})();
